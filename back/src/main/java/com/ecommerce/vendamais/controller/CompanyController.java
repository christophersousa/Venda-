package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.dto.*;
import com.ecommerce.vendamais.service.CompanyService;
import com.ecommerce.vendamais.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("empresa")
@RestController
public class CompanyController {
    @Autowired
    CompanyService companyService;

    @PostMapping("/cadastro")
    public ResponseDto signup(@RequestBody SignUpCompanyDto signUpDto){
        return companyService.signUp(signUpDto);
    }

    @PostMapping("/login")
    public SignInResponseDto signin(@RequestBody SignInDto signInDto){
        return companyService.signin(signInDto);
    }
}
