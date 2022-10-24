package com.example.authentication.service;

import com.example.authentication.dto.ResponseDto;
import com.example.authentication.dto.SignInDto;
import com.example.authentication.dto.SignInResponseDto;
import com.example.authentication.dto.SignUpCompanyDto;
import com.example.authentication.exceptions.AuthenticationFailException;
import com.example.authentication.exceptions.CustomException;
import com.example.authentication.model.AuthCompanyToken;
import com.example.authentication.model.Company;
import com.example.authentication.repository.CompanyRepository;
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

        String encryptedPassword;
        try{
            encryptedPassword = hashPassword(signUpCompanyDto.getSenha());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new CustomException(e.getMessage());
        }

        Company company = new Company(signUpCompanyDto.getNome(),
                                        signUpCompanyDto.getRazaoSocial(),
                                        signUpCompanyDto.getCnpj(),
                                        signUpCompanyDto.getTelefone(),
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

        return new SignInResponseDto("sucess", token.getToken(), company);

    }
}
