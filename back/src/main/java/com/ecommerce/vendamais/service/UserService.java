package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.dto.ResponseDto;
import com.ecommerce.vendamais.dto.SignInDto;
import com.ecommerce.vendamais.dto.SignInResponseDto;
import com.ecommerce.vendamais.dto.SignUpDto;
import com.ecommerce.vendamais.exceptions.AuthenticationFailException;
import com.ecommerce.vendamais.exceptions.CustomException;
import com.ecommerce.vendamais.model.AuthenticationToken;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import javax.xml.bind.DatatypeConverter;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Objects;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    AuthenticationService authenticationService;
    @Transactional
    public ResponseDto signUp(SignUpDto signUpDto) {

        if(Objects.nonNull(userRepository.findByCpf(signUpDto.getCpf()))){
            throw new CustomException("usuário já cadastrado");
        }

        String encryptedPassword = signUpDto.getPassword();
        try{
            encryptedPassword = hashPassword(signUpDto.getPassword());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new CustomException(e.getMessage());
        }

        User user = new User(signUpDto.getFullName(),
                             signUpDto.getCpf(),
                             signUpDto.getEmail(),
                             encryptedPassword);

        userRepository.save(user);

        final AuthenticationToken authenticationToken =  new AuthenticationToken(user);
        authenticationService.saveToken(authenticationToken);

        ResponseDto responseDto = new ResponseDto("success", "usuário cadastrado com sucesso");
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
        User user = userRepository.findByEmail(signInDto.getEmail());
        if(Objects.isNull(user)){
            throw new AuthenticationFailException("usuário não cadastrado");
        }

        try{
            if(!user.getPassword().equals(hashPassword(signInDto.getPassword()))){
                throw new AuthenticationFailException("senha inválida");
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        AuthenticationToken token = authenticationService.getToken(user);
        if(Objects.isNull(token)){
            throw new CustomException("token inválido");
        }

        return new SignInResponseDto("sucess", token.getToken());

    }
}
