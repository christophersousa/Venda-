package com.ecommerce.vendamais.dto;

import com.ecommerce.vendamais.model.Type;

import java.util.List;

public class CategoryTypesDto {
    public Integer id;
    public String name;
    public List<Type> values;

    public CategoryTypesDto(Integer id,String name, List<Type> values) {
        this.id = id;
        this.name = name;
        this.values = values;
    }
}
