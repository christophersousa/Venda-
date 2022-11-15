package com.ecommerce.vendamais.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "produtos")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private @NotNull String nome;
    private @NotNull String descricao;

    private @NotNull double precoAnterior;
    private @NotNull double preco;
    private @NotNull String marca;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "categoria_id")
    Category category;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "empresa_id")
    Company company;

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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getPrecoAnterior() {
        return precoAnterior;
    }

    public void setPrecoAnterior(double precoAnterior) {
        this.precoAnterior = precoAnterior;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }
}
