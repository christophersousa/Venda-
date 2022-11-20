package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.dto.ProductDto;
import com.ecommerce.vendamais.exceptions.CustomException;
import com.ecommerce.vendamais.model.*;
import com.ecommerce.vendamais.repository.PhotoRepository;
import com.ecommerce.vendamais.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import javax.validation.constraints.NotNull;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    @Autowired
    PhotoRepository photoRepository;

    public void createProduct(ProductDto productDto, Type type, Company company){
        Product product = new Product();
        product.setNome(productDto.getNome());
        product.setDescricao(productDto.getDescricao());
        product.setPrecoAnterior(productDto.getPrecoAnterior());
        product.setPreco(productDto.getPreco());
        product.setMarca(productDto.getMarca());
        product.setEstoque(productDto.getEstoque());
        product.setType(type);
        product.setCompany(company);
        productRepository.save(product);
    }

    public ProductDto getProductDto(Product product){
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setNome(product.getNome());
        productDto.setDescricao(product.getDescricao());
        productDto.setPrecoAnterior(product.getPrecoAnterior());
        productDto.setPreco(product.getPreco());
        productDto.setMarca(product.getMarca());
        productDto.setEstoque(product.getEstoque());
        productDto.setTipoId(product.getType().getId());
        productDto.setEmpresaId(product.getCompany().getId());

        byte[] foto = photoRepository.findByProduct_Id(product.getId()).getImgBytes();

        productDto.setFoto(foto);

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
        editedProduct.setNome(productDto.getNome());
        editedProduct.setDescricao(productDto.getDescricao());
        editedProduct.setPrecoAnterior(productDto.getPrecoAnterior());
        editedProduct.setPreco(productDto.getPreco());
        editedProduct.setMarca(productDto.getMarca());
        productRepository.save(editedProduct);
    }

    public void deleteProduct(int productId) {
        productRepository.deleteById(productId);
    }

    public ProductDto getProductDtoById(int productId) {
        Optional<Product> product = productRepository.findById(productId);
        if(!product.isPresent()){
            throw new CustomException("produto não existe");
        }
        return getProductDto(product.get());
    }

    public Product getProductById(int productId) {
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (optionalProduct.isEmpty()) {
            throw new CustomException("produto não existe");
        }
        return optionalProduct.get();
    }


    public void savePhoto(MultipartFile photo, int productId) throws Exception {
        Optional<Product> product = productRepository.findById(productId);
        if(!product.isPresent()){
            throw new CustomException("produto não existe");
        }
        Photo productPhoto = new Photo();
        productPhoto.setImgBytes(photo.getBytes());
        productPhoto.setName(photo.getOriginalFilename());
        productPhoto.setProduct(product.get());
        photoRepository.save(productPhoto);
    }

    @Transactional
    public @NotNull byte[] getProductPhotoById(int productId) {
        Optional<Photo> optionalPhoto = Optional.ofNullable(photoRepository.findByProduct_Id(productId));
        if (optionalPhoto.isEmpty()) {
            throw new CustomException("foto não existe");
        }
        return optionalPhoto.get().getImgBytes();
    }

    public @NotNull List<Photo> getProductPhotos() {
        return photoRepository.findAll();
    }
}
