package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.dto.cart.AddToCartDto;
import com.ecommerce.vendamais.dto.cart.CartDto;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.service.AuthenticationService;
import com.ecommerce.vendamais.service.CartService;
import com.ecommerce.vendamais.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pedido")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createOrder(@RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);

        orderService.createOrder(user);

        return new ResponseEntity<>(new ApiResponse(true, "pedido criado com sucesso"), HttpStatus.CREATED);
    }


}
