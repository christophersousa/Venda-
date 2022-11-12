package com.ecommerce.vendamais.dto;

import javax.validation.constraints.NotNull;

public class AddToCartDto {
    private Integer id;
    private @NotNull Integer produtoId;
    private @NotNull Integer quantidade;

    public AddToCartDto(Integer id, Integer produtoId, Integer quantidade) {
        this.id = id;
        this.produtoId = produtoId;
        this.quantidade = quantidade;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProdutoId() {
        return produtoId;
    }

    public void setProdutoId(Integer produtoId) {
        this.produtoId = produtoId;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }
}
