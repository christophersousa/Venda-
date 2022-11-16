package com.ecommerce.vendamais.dto;

import javax.validation.constraints.NotNull;

public class TypeDto {
    //atributo opcional no add porém necessário para update
    private Integer id;
    private @NotNull String nome;
    private @NotNull Integer categoriaId;

    public TypeDto(Integer id, String nome, Integer categoriaId) {
        this.id = id;
        this.nome = nome;
        this.categoriaId = categoriaId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getCategoriaId() {
        return categoriaId;
    }

    public void setCategoriaId(Integer categoriaId) {
        this.categoriaId = categoriaId;
    }
}
