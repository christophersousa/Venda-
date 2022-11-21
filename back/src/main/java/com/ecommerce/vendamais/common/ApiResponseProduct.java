package com.ecommerce.vendamais.common;

import java.time.LocalDateTime;

public class ApiResponseProduct {
    private final boolean success;
    private final String message;
    private final Integer idProduct;

    public ApiResponseProduct(boolean success, String message, Integer idProduct ) {
        this.idProduct = idProduct;
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public String getMessage() {
        return message;
    }

    public Integer getIdProduct() {
        return idProduct;
    }

    public String getTimestamp() {
        return LocalDateTime.now().toString();
    }
}
