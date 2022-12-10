package com.ecommerce.vendamais.dto.order;

import com.ecommerce.vendamais.common.StatusPedido;
import com.ecommerce.vendamais.model.Product;

public class OrderItemDto {
    private Integer id;

    private int quantidade;

    private double preco;

    private Integer pedidoId;

    private Integer empresaId;

    private Product product;

    private StatusPedido statusPedidoItem;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public Integer getPedidoId() {
        return pedidoId;
    }

    public void setPedidoId(Integer pedidoId) {
        this.pedidoId = pedidoId;
    }

    public Integer getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(Integer empresaId) {
        this.empresaId = empresaId;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public StatusPedido getStatusPedidoItem() {
        return statusPedidoItem;
    }

    public void setStatusPedidoItem(StatusPedido statusPedidoItem) {
        this.statusPedidoItem = statusPedidoItem;
    }
}
