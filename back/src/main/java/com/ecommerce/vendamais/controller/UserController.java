package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.dto.ResponseDto;
import com.ecommerce.vendamais.dto.SignInDto;
import com.ecommerce.vendamais.dto.SignInResponseDto;
import com.ecommerce.vendamais.dto.SignUpDto;
import com.ecommerce.vendamais.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("user")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/cadastro")
    public ResponseDto signup(@RequestBody SignUpDto signUpDto){
        return userService.signUp(signUpDto);
    }

    @PostMapping("/logar")
    public SignInResponseDto signin(@RequestBody SignInDto signInDto){
        return userService.signin(signInDto);
    }
}
