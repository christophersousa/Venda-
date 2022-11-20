package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.dto.TypeDto;
import com.ecommerce.vendamais.model.Category;
import com.ecommerce.vendamais.model.Type;
import com.ecommerce.vendamais.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService {
    @Autowired
    TypeRepository typeRepository;

    public void createType(TypeDto typeDto, Category category){
        Type type = new Type();
        type.setId(type.getId());
        type.setNome(typeDto.getNome());
        type.setCategory(category);
        typeRepository.save(type);
    }

    public List<Type> listType(){
        return typeRepository.findAllByOrderByCategory_IdAscNomeAsc();
    }
}
