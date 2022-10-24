package com.example.authentication.service;

import com.example.authentication.exceptions.AuthenticationFailException;
import com.example.authentication.model.AuthCompanyToken;
import com.example.authentication.model.AuthUserToken;
import com.example.authentication.model.Company;
import com.example.authentication.model.User;
import com.example.authentication.repository.CompanyTokenRepository;
import com.example.authentication.repository.UserTokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthenticationService {
    @Autowired
    UserTokenRepository userTokenRepository;

    @Autowired
    CompanyTokenRepository companyTokenRepository;
    public void saveToken(AuthUserToken authUserToken) {
        userTokenRepository.save(authUserToken);
    }
    public void saveToken(AuthCompanyToken authenticationToken) {
        companyTokenRepository.save(authenticationToken);
    }
    public AuthUserToken getToken(User user) {
        return userTokenRepository.findByUser(user);
    }

    public AuthCompanyToken getToken(Company company) {
        return companyTokenRepository.findByCompany(company);
    }

    public Company getCompany(String token){
        final AuthCompanyToken authenticationToken = companyTokenRepository.findByToken(token);
        if(Objects.isNull(token)){
            return null;
        }
        return authenticationToken.getCompany();
    }

    public void authenticate(String token) throws AuthenticationFailException {
        if(Objects.isNull(token)){
            throw new AuthenticationFailException("token não existe");
        }
        if(Objects.isNull(getCompany(token))){
            throw new AuthenticationFailException("token de empresa inválido");
        }
    }
}
