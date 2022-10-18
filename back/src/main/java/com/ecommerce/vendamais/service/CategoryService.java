package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.model.Category;
import com.ecommerce.vendamais.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    public void createCategory(Category category){
        categoryRepository.save(category);
    }

    public List<Category> listCategory(){
        return categoryRepository.findAll();
    }

    public void updateCategory(int categoryId, Category category){
        Category editedCategory = categoryRepository.getReferenceById(categoryId);
        editedCategory.setCategoryName(category.getCategoryName());
        categoryRepository.save(editedCategory);
    }

    public boolean findById(int categoryId){
        return categoryRepository.findById(categoryId).isPresent();
    }

    public void deleteCategory(int categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
