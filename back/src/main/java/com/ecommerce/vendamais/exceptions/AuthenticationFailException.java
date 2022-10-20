package com.ecommerce.vendamais.exceptions;

public class AuthenticationFailException extends IllegalArgumentException{
    public AuthenticationFailException(String message){
        super(message);
    }
}
