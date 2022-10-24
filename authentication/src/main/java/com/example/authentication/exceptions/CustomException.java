package com.example.authentication.exceptions;

public class CustomException extends IllegalArgumentException{
    public CustomException(String message){
        super(message);
    }
}
