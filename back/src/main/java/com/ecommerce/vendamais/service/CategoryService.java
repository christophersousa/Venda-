package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.dto.CategoryDto;
import com.ecommerce.vendamais.model.Category;
import com.ecommerce.vendamais.model.Type;
import com.ecommerce.vendamais.repository.CategoryRepository;
import com.ecommerce.vendamais.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    TypeRepository typeRepository;

    public void createCategory(Category category){
        categoryRepository.save(category);
    }

    public List<Category> listCategory(){
        return categoryRepository.findAll();
    }

    public List<CategoryDto> listCategoryWithTypes(){

        List<CategoryDto> result = new ArrayList<>();
        List<Category> categories = categoryRepository.findAll();

        for(Category category : categories){
            List<Type> types =  typeRepository.findTypeByCategory_Id(category.getId());
            List<String> typesNames = new ArrayList<>();
            for(Type type : types){ typesNames.add(type.getNome()); }

            CategoryDto categoriesAndHisTypes = new CategoryDto(category.getNome(), typesNames);
            result.add(categoriesAndHisTypes);
        }

        return result;
    }

    public void updateCategory(int categoryId, Category category){
        Category editedCategory = categoryRepository.getReferenceById(categoryId);
        editedCategory.setNome(category.getNome());
        categoryRepository.save(editedCategory);
    }

    public boolean findById(int categoryId){
        return categoryRepository.findById(categoryId).isPresent();
    }

    public void deleteCategory(int categoryId) {
        categoryRepository.deleteById(categoryId);
    }

    public Optional<Category> getCategoryById(int categoryId) {
        return categoryRepository.findById(categoryId);
    }
}
