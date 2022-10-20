package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.dto.ProductDto;
import com.ecommerce.vendamais.model.Category;
import com.ecommerce.vendamais.model.Photo;
import com.ecommerce.vendamais.model.Product;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.PhotoRepository;
import com.ecommerce.vendamais.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    PhotoRepository photoRepository;

    public void createProduct(ProductDto productDto, Category category, User user){
        Product product = new Product();
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setPrice(productDto.getPrice());
        product.setImageUrl(productDto.getImageUrl());
        product.setCategory(category);
        product.setUser(user);
        productRepository.save(product);
    }

    public ProductDto getProductDto(Product product){
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setName(product.getName());
        productDto.setDescription(product.getDescription());
        productDto.setPrice(product.getPrice());
        productDto.setImageUrl(product.getImageUrl());
        productDto.setCategoryId(product.getCategory().getId());
        productDto.setUserId(product.getUser().getId());
        return productDto;
    }

    public List<ProductDto> getAllProducts(){
        List<Product> allProducts = productRepository.findAll();

        List<ProductDto> productDtos = new ArrayList<>();
        for(Product product: allProducts){
            productDtos.add(getProductDto(product));
        }
        return productDtos;
    }
    public boolean findById(int productId){
        return productRepository.findById(productId).isPresent();
    }

    public void updateProduct(ProductDto productDto, int productId) throws Exception {
        Optional<Product> product = productRepository.findById(productId);
        if(!product.isPresent()){
            throw new Exception("produto não existe");
        }
        Product editedProduct = product.get();
        editedProduct.setName(productDto.getName());
        editedProduct.setDescription(productDto.getDescription());
        editedProduct.setPrice(productDto.getPrice());
        editedProduct.setImageUrl(productDto.getImageUrl());
        productRepository.save(editedProduct);
    }

    public void deleteProduct(int productId) {
        productRepository.deleteById(productId);
    }

    public ProductDto getProductById(int productId) {
        Optional<Product> product = productRepository.findById(productId);
        if(product.isPresent()){
            return getProductDto(product.get());
        }
        return null;
    }

    public void savePhoto(MultipartFile photo, int productId) throws Exception {
        Optional<Product> product = productRepository.findById(productId);
        if(!product.isPresent()){
            throw new Exception("produto não existe");
        }
        Photo productPhoto = new Photo();
        productPhoto.setImgBytes(photo.getBytes());
        productPhoto.setName(photo.getOriginalFilename());
        productPhoto.setProduct(product.get());
        photoRepository.save(productPhoto);

    }
}
