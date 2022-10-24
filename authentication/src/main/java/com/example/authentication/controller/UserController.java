package com.example.authentication.controller;

import com.example.authentication.dto.ResponseDto;
import com.example.authentication.dto.SignInDto;
import com.example.authentication.dto.SignInResponseDto;
import com.example.authentication.dto.SignUpUserDto;
import com.example.authentication.service.UserService;
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
