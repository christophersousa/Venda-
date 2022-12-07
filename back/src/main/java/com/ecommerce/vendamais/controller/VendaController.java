package com.ecommerce.vendamais.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.service.AuthenticationService;
import com.ecommerce.vendamais.service.VendaService;

@RestController
@RequestMapping("/venda")
public class VendaController {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private VendaService vendaService;

    @PostMapping("/add")
    public ResponseEntity<ApiResponse> addToCart(@RequestParam("token") String token) {
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);

        vendaService.addVenda(user);
        ;

        return new ResponseEntity<>(new ApiResponse(true, "produto adicionado ao carrinho"), HttpStatus.CREATED);
    }
}
