package com.ecommerce.vendamais.dto;

import com.ecommerce.vendamais.model.User;

public class SignInResponseDto {
    private String status;
    private String token;

    private String fullName;

    private int id;

    public SignInResponseDto(String status, String token, User user) {
        this.status = status;
        this.token = token;
        this.fullName = user.getFullName();
        this.id = user.getId();
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

    public String getFullName() {
        return fullName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
