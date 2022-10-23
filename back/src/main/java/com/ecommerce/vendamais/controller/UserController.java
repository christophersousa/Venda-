package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.dto.ResponseDto;
import com.ecommerce.vendamais.dto.SignInDto;
import com.ecommerce.vendamais.dto.SignInResponseDto;
import com.ecommerce.vendamais.dto.SignUpUserDto;
import com.ecommerce.vendamais.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("usuario")
@RestController
public class UserController {
    @Autowired
    UserService userService;

    @PostMapping("/cadastro")
    public ResponseDto signup(@RequestBody SignUpUserDto signUpUserDto){
        return userService.signUp(signUpUserDto);
    }

    @PostMapping("/login")
    public SignInResponseDto signin(@RequestBody SignInDto signInDto){
        return userService.signin(signInDto);
    }
}
