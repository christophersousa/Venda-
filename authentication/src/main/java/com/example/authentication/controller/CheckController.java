package com.example.authentication.controller;

import com.example.authentication.model.Company;
import com.example.authentication.model.User;
import com.example.authentication.repository.CompanyRepository;
import com.example.authentication.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("check")
@RestController
public class CheckController {
    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/email")
    public String checkEmail(@RequestParam("email") String email){
        List<User> users = userRepository.findAll();
        List<Company> companies = companyRepository.findAll();

        for(User user: users){
            if(user.getEmail().equals(email)){
                return "true";
            }
        }

        for(Company company: companies){
            if(company.getEmail().equals(email)){
                return "true";
            }
        }
        return "false";
    }


}
