package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.dto.AddressDto;
import com.ecommerce.vendamais.model.Address;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.service.AddressService;
import com.ecommerce.vendamais.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/endereco")
public class AddressController {
    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private AddressService addressService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createAddress(@RequestBody AddressDto addressDto,
                                                     @RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);

        addressService.createAddress(addressDto, user);

        return new ResponseEntity<>(new ApiResponse(true, "endereco criado com sucesso"), HttpStatus.CREATED);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<Address> getAddressByUser(@RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);

        Address address = addressService.getAddressByUser(user.getId());

        return new ResponseEntity<>(address, HttpStatus.OK);
    }



}
