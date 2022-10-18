package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.model.Category;
import com.ecommerce.vendamais.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    CategoryService categoryService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createCategory(@RequestBody Category category){
        categoryService.createCategory(category);
        return new ResponseEntity<>(new ApiResponse(true, "categoria criada com sucesso"), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public List<Category> listCategory(){
        return categoryService.listCategory();

    }
    @GetMapping("/{categoryId}")
    public Optional<Category> getCategory(@PathVariable("categoryId") int categoryId){
        return categoryService.getCategoryById(categoryId);
    }

    @PostMapping("/update/{categoryId}")
    public ResponseEntity<ApiResponse> updateCategory(@PathVariable("categoryId") int categoryId, @RequestBody Category category){
        if(!categoryService.findById(categoryId)){
            return new ResponseEntity<>(new ApiResponse(false, "categoria não existe"), HttpStatus.NOT_FOUND);
        }
        categoryService.updateCategory(categoryId, category);
        return new ResponseEntity<>(new ApiResponse(true, "categoria editada com sucesso"), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{categoryId}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable("categoryId") int categoryId){
        if(!categoryService.findById(categoryId)){
            return new ResponseEntity<>(new ApiResponse(false, "categoria não existe"), HttpStatus.NOT_FOUND);
        }
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>(new ApiResponse(true, "categoria removida com sucesso"), HttpStatus.OK);
    }

}
