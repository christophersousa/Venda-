package com.ecommerce.vendamais.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "pedido_itens")
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "quantidade")
    private @NotNull int quantidade;

    @Column(name = "preco")
    private @NotNull double preco;

    @ManyToOne
    @JoinColumn(name = "pedido_id", referencedColumnName = "id")
    private Order order;

    @ManyToOne
    @JoinColumn(name = "produto_id", referencedColumnName = "id")
    private Product product;

    @ManyToOne
    @JoinColumn(name = "empresa_id", referencedColumnName = "id")
    private Company company;

    public OrderItem(){

    }

    public OrderItem(int quantidade, double preco, Order order, Product product, Company company) {
        this.quantidade = quantidade;
        this.preco = preco;
        this.order = order;
        this.product = product;
        this.company = company;
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

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
