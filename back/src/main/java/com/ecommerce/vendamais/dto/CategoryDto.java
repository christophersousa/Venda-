package com.ecommerce.vendamais.dto;

import java.util.List;

public class CategoryDto {
    public String name;
    public List<String> values;

    public CategoryDto(String name, List<String> values) {
        this.name = name;
        this.values = values;
    }
}
