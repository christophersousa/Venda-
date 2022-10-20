package com.ecommerce.vendamais.exceptions;

public class CustomException extends IllegalArgumentException{
    public CustomException(String message){
        super(message);
    }
}
