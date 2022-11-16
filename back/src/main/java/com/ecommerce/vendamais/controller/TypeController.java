package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.dto.TypeDto;
import com.ecommerce.vendamais.model.Category;
import com.ecommerce.vendamais.model.Type;
import com.ecommerce.vendamais.repository.CategoryRepository;
import com.ecommerce.vendamais.service.CategoryService;
import com.ecommerce.vendamais.service.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tipo")
public class TypeController {
    @Autowired
    TypeService typeService;
    @Autowired
    CategoryService categoryService;

    @Autowired
    CategoryRepository categoryRepository;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createType(@RequestBody TypeDto typeDto){
        Optional<Category> category = categoryRepository.findById(typeDto.getCategoriaId());
        if(!category.isPresent()){
            return new ResponseEntity<>(new ApiResponse(false, "categoria do produto não existe"), HttpStatus.BAD_REQUEST);
        }

        typeService.createType(typeDto, category.get());
        return new ResponseEntity<>(new ApiResponse(true, "tipo de produto criado com sucesso"), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public List<Type> listType(){
        return typeService.listType();

    }

}
