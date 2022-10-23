package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.dto.*;
import com.ecommerce.vendamais.exceptions.AuthenticationFailException;
import com.ecommerce.vendamais.exceptions.CustomException;
import com.ecommerce.vendamais.model.AuthCompanyToken;
import com.ecommerce.vendamais.model.AuthenticationToken;
import com.ecommerce.vendamais.model.Company;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.CompanyRepository;
import com.ecommerce.vendamais.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

@Service
public class CompanyService {
    @Autowired
    CompanyRepository companyRepository;

    @Autowired
    AuthenticationService authenticationService;

    @Transactional
    public ResponseDto signUp(SignUpCompanyDto signUpCompanyDto) {

        if(Objects.nonNull(companyRepository.findByCnpj(signUpCompanyDto.getCnpj()))){
            throw new CustomException("empresa já cadastrada");
        }

        String encryptedPassword = signUpCompanyDto.getPassword();
        try{
            encryptedPassword = hashPassword(signUpCompanyDto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new CustomException(e.getMessage());
        }

        Company company = new Company(signUpCompanyDto.getNome(),
                                        signUpCompanyDto.getRazaoSocial(),
                                        signUpCompanyDto.getCnpj(),
                                        signUpCompanyDto.getPhone(),
                                        signUpCompanyDto.getEmail(),
                                        encryptedPassword);

        companyRepository.save(company);

        final AuthCompanyToken authenticationToken =  new AuthCompanyToken(company);
        authenticationService.saveToken(authenticationToken);

        ResponseDto responseDto = new ResponseDto("success", "empresa cadastrada com sucesso");
        return responseDto;
    }

    private String hashPassword(String password) throws NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("MD5");
        md.update(password.getBytes());
        byte[] digest = md.digest();
        String hash = DatatypeConverter.printHexBinary(digest).toUpperCase();
        return hash;

    }

    public SignInResponseDto signin(SignInDto signInDto) {
        Company company = companyRepository.findByEmail(signInDto.getEmail());
        if(Objects.isNull(company)){
            throw new AuthenticationFailException("empresa não cadastrada");
        }

        try{
            if(!company.getPassword().equals(hashPassword(signInDto.getPassword()))){
                throw new AuthenticationFailException("senha inválida");
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        AuthCompanyToken token = authenticationService.getToken(company);
        if(Objects.isNull(token)){
            throw new CustomException("token inválido");
        }

        return new SignInResponseDto("sucess", token.getToken());

    }
}
