package com.example.authentication.dto;


import com.example.authentication.model.Company;
import com.example.authentication.model.User;

public class SignInResponseDto {
    private String status;
    private String token;

    private String nome;
    private String email;

    private int id;

    public SignInResponseDto(String status, String token, User user) {
        this.status = status;
        this.token = token;
        this.nome = user.getNomeCompleto();
        this.id = user.getId();
        this.email = user.getEmail();
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
