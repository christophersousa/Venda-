package com.ecommerce.vendamais.dto;

import com.ecommerce.vendamais.model.Company;
import com.ecommerce.vendamais.model.User;

public class SignInResponseDto {
    private String status;
    private String token;

    private String nome;

    private int id;

    public SignInResponseDto(String status, String token, User user) {
        this.status = status;
        this.token = token;
        this.nome = user.getNomeCompleto();
        this.id = user.getId();
    }

    public SignInResponseDto(String status, String token, Company company) {
        this.status = status;
        this.token = token;
        this.nome = company.getNome();
        this.id = company.getId();
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
