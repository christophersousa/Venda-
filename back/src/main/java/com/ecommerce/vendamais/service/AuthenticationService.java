package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.exceptions.AuthenticationFailException;
import com.ecommerce.vendamais.model.AuthCompanyToken;
import com.ecommerce.vendamais.model.AuthUserToken;
import com.ecommerce.vendamais.model.Company;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.CompanyTokenRepository;
import com.ecommerce.vendamais.repository.UserTokenRepository;
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

    public void authenticate(String token) throws AuthenticationFailException{
        if(Objects.isNull(token)){
            throw new AuthenticationFailException("token não existe");
        }
        if(Objects.isNull(getCompany(token))){
            throw new AuthenticationFailException("token de empresa inválido");
        }
    }
}
