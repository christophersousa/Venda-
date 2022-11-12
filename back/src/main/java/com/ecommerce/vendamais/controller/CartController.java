package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.dto.AddToCartDto;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.service.AuthenticationService;
import com.ecommerce.vendamais.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartService cartService;
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addToCart(@RequestBody AddToCartDto addToCartDto,
                                                 @RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);

        cartService.addToCart(addToCartDto, user);

        return new ResponseEntity<>(new ApiResponse(true, "produto adicionado ao carrinho"), HttpStatus.CREATED);
    }
}
