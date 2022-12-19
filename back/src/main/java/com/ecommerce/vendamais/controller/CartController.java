package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.dto.cart.AddToCartDto;
import com.ecommerce.vendamais.dto.cart.CartDto;
import com.ecommerce.vendamais.dto.cart.CartItemDto;
import com.ecommerce.vendamais.model.Cart;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.service.AuthenticationService;
import com.ecommerce.vendamais.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrinho")
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

    @GetMapping("/")
    public ResponseEntity<CartDto> getCartItems(@RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);

        CartDto cartDto = cartService.listCartItems(user);
        return new ResponseEntity<>(cartDto, HttpStatus.OK);
    }

    @GetMapping("/cartItem/{itemId}")
    public ResponseEntity<CartItemDto> getCartItem(@PathVariable("itemId") Integer itemId){


        CartItemDto cartItemDto = cartService.getCartItem(itemId);
        return new ResponseEntity<>(cartItemDto, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{itemId}")
    public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable("itemId") Integer itemId,
                                                      @RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);
        cartService.deleteCartItem(itemId, user);

        return new ResponseEntity<>(new ApiResponse(true, "produto removido do carrinho"), HttpStatus.OK);

    }

    @PostMapping("/update/{itemId}")
    public ResponseEntity<ApiResponse> incrementCartItem(@PathVariable("itemId") Integer itemId,
                                                      @RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);
        cartService.incrementCartItem(itemId, user);

        return new ResponseEntity<>(new ApiResponse(true, "quantidade de produto incrementada"), HttpStatus.OK);

    }
}
