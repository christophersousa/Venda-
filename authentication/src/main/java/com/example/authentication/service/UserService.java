package com.example.authentication.service;


import com.example.authentication.dto.ResponseDto;
import com.example.authentication.dto.SignInDto;
import com.example.authentication.dto.SignInResponseDto;
import com.example.authentication.dto.SignUpUserDto;
import com.example.authentication.exceptions.AuthenticationFailException;
import com.example.authentication.exceptions.CustomException;
import com.example.authentication.model.AuthUserToken;
import com.example.authentication.model.User;
import com.example.authentication.repository.UserRepository;
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
    public ResponseDto signUp(SignUpUserDto signUpUserDto) {
        if(Objects.nonNull(userRepository.findByCpf(signUpUserDto.getCpf()))){
            throw new CustomException("usuário já cadastrado");
        }

        String encryptedPassword = signUpUserDto.getSenha();
        try{
            encryptedPassword = hashPassword(signUpUserDto.getSenha());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            throw new CustomException(e.getMessage());
        }

        User user = new User(signUpUserDto.getNomeCompleto(),
                            signUpUserDto.getCpf(),
                            signUpUserDto.getDataNascimento(),
                            signUpUserDto.getEmail(),
                            encryptedPassword,
                            signUpUserDto.getTelefone(),
                            signUpUserDto.getGenero(),
                            signUpUserDto.getCep());

        userRepository.save(user);

        final AuthUserToken authUserToken =  new AuthUserToken(user);
        authenticationService.saveToken(authUserToken);

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
            if(!user.getSenha().equals(hashPassword(signInDto.getPassword()))){
                throw new AuthenticationFailException("senha inválida");
            }
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }

        AuthUserToken token = authenticationService.getToken(user);
        if(Objects.isNull(token)){
            throw new CustomException("token inválido");
        }

        return new SignInResponseDto("sucess", token.getToken(), user);

    }
}
