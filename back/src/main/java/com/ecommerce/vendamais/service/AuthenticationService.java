package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.exceptions.AuthenticationFailException;
import com.ecommerce.vendamais.model.AuthCompanyToken;
import com.ecommerce.vendamais.model.AuthenticationToken;
import com.ecommerce.vendamais.model.Company;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.CompanyTokenRepository;
import com.ecommerce.vendamais.repository.TokenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthenticationService {
    @Autowired
    TokenRepository tokenRepository;

    @Autowired
    CompanyTokenRepository companyTokenRepository;
    public void saveToken(AuthenticationToken authenticationToken) {
        tokenRepository.save(authenticationToken);
    }

    public void saveToken(AuthCompanyToken authenticationToken) {
        companyTokenRepository.save(authenticationToken);
    }
    public AuthenticationToken getToken(User user) {
        return tokenRepository.findByUser(user);
    }

    public AuthCompanyToken getToken(Company company) {
        return companyTokenRepository.findByCompany(company);
    }

    public User getUser(String token){
        final AuthenticationToken authenticationToken = tokenRepository.findByToken(token);
        if(Objects.isNull(token)){
            return null;
        }
        return authenticationToken.getUser();
    }

    public Company getCompany(String token){
        final AuthCompanyToken authenticationToken = companyTokenRepository.findByToken(token);
        if(Objects.isNull(token)){
            return null;
        }
        return authenticationToken.getCompany();
    }

    public void authenticate(String token) throws AuthenticationFailException{
        if(Objects.isNull(token)){
            throw new AuthenticationFailException("token não existe");
        }
        if(Objects.isNull(getUser(token))){
            throw new AuthenticationFailException("token de usuário inválido");
        }
    }
}
