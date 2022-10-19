package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.dto.ProductDto;
import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.model.Category;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.CategoryRepository;
import com.ecommerce.vendamais.service.AuthenticationService;
import com.ecommerce.vendamais.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    ProductService productService;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    AuthenticationService authenticationService;
    @PostMapping("/add")
    public ResponseEntity<ApiResponse> createProduct(@RequestBody ProductDto productDto,
                                                     @RequestParam("token") String token){
        authenticationService.authenticate(token);

        User user = authenticationService.getUser(token);

        Optional<Category> category = categoryRepository.findById(productDto.getCategoryId());
        if(!category.isPresent()){
            return new ResponseEntity<>(new ApiResponse(false, "categoria do produto não existe"), HttpStatus.BAD_REQUEST);
        }
        productService.createProduct(productDto, category.get(), user);
        return new ResponseEntity<>(new ApiResponse(true, "produto adicionado com sucesso"), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<ProductDto>> getProducts(){
        List<ProductDto> products = productService.getAllProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{productId}")
    public ProductDto getProductById(@PathVariable("productId") int productId){
       return productService.getProductById(productId);

    }

    @PostMapping("/{productId}/upload")
    public ResponseEntity<ApiResponse> uploadPhoto(@RequestParam MultipartFile photo, int productId) throws Exception {
        if(!productService.findById(productId)){
            return new ResponseEntity<>(new ApiResponse(false, "produto não existe"), HttpStatus.NOT_FOUND);
        }
        productService.savePhoto(photo, productId);
        return new ResponseEntity<>(new ApiResponse(true, "foto do produto salva com sucesso"), HttpStatus.OK);
    }


    @PostMapping("/update/{productId}")
    public ResponseEntity<ApiResponse> updateProduct(@PathVariable("productId") int productId, @RequestBody ProductDto productDto) throws Exception {
        Optional<Category> category = categoryRepository.findById(productDto.getCategoryId());
        if(!category.isPresent()){
            return new ResponseEntity<>(new ApiResponse(false, "categoria do produto não existe"), HttpStatus.NOT_FOUND);
        }

        productService.updateProduct(productDto, productId);
        return new ResponseEntity<>(new ApiResponse(true, "produto editado com sucesso"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{productId}")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable("productId") int productId){
        if(!productService.findById(productId)){
            return new ResponseEntity<>(new ApiResponse(false, "produto não existe"), HttpStatus.NOT_FOUND);
        }
        productService.deleteProduct(productId);
        return new ResponseEntity<>(new ApiResponse(true, "produto removido com sucesso"), HttpStatus.OK);
    }
}
