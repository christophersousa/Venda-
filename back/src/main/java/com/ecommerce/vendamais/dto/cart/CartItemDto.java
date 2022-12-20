package com.ecommerce.vendamais.dto.cart;

import com.ecommerce.vendamais.model.Cart;
import com.ecommerce.vendamais.model.Product;

public class CartItemDto {
    private Integer id;
    private Integer quantidade;
    private Product produto;

    private double valorTotalItens;

    public CartItemDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Product getProduto() {
        return produto;
    }

    public void setProduto(Product produto) {
        this.produto = produto;
    }

    public double getValorTotalItens() {
        return valorTotalItens;
    }

    public void setValorTotalItens(double valorTotalItens) {
        this.valorTotalItens = valorTotalItens;
    }

    public CartItemDto(Cart cart) {
        this.id = cart.getId();
        this.quantidade = cart.getQuantidade();
        this.setProduto(cart.getProduto());
    }
}
