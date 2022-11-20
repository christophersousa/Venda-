package com.ecommerce.vendamais.dto;

import com.ecommerce.vendamais.model.Photo;

import javax.validation.constraints.NotNull;

public class ProductDto {
    //atributo opcional no add porém necessário para update
    private Integer id;
    private @NotNull String nome;
    private @NotNull String descricao;

    private @NotNull double precoAnterior;

    private @NotNull double preco;

    private @NotNull String marca;

    private @NotNull Integer estoque;

    private byte[] foto;

    public Integer getEstoque() {
        return estoque;
    }

    public void setEstoque(Integer estoque) {
        this.estoque = estoque;
    }

    private @NotNull Integer tipoId;

    private @NotNull Integer empresaId;

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

    public Integer getTipoId() {
        return tipoId;
    }

    public void setTipoId(Integer tipoId) {
        this.tipoId = tipoId;
    }

    public Integer getEmpresaId() {
        return empresaId;
    }

    public void setEmpresaId(Integer empresaId) {
        this.empresaId = empresaId;
    }

    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }
}
