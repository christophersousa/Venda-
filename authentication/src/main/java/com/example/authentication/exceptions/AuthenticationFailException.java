package com.example.authentication.exceptions;

public class AuthenticationFailException extends IllegalArgumentException{
    public AuthenticationFailException(String message){
        super(message);
    }
}
