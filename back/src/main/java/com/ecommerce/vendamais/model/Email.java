package com.ecommerce.vendamais.model;

public class Email {
    String nome;
    String email;
    UserEmail user;
    ProdutoEmail produto;

    public Email() {

    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public UserEmail getUser() {
        return user;
    }

    public void setUser(UserEmail user) {
        this.user = user;
    }

    public ProdutoEmail getProduto() {
        return produto;
    }

    public void setProduto(ProdutoEmail produto) {
        this.produto = produto;
    }

    @Override
    public String toString() {
        return "Email [nome=" + nome + ", email=" + email + ", user=" + user + ", produto=" + produto + "]";
    }
}
