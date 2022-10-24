package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.exceptions.AuthenticationFailException;
import com.ecommerce.vendamais.model.AuthCompanyToken;
import com.ecommerce.vendamais.model.Company;
import com.ecommerce.vendamais.repository.CompanyTokenRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class AuthenticationService {
    @Autowired
    CompanyTokenRepository companyTokenRepository;

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
        if(Objects.isNull(getCompany(token))){
            throw new AuthenticationFailException("token de empresa inválido");
        }
    }
}
