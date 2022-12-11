package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.dto.AddressDto;
import com.ecommerce.vendamais.exceptions.CustomException;
import com.ecommerce.vendamais.model.Address;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {
    @Autowired
    AddressRepository addressRepository;

    public void createAddress(AddressDto addressDto, User user) {
        Address address = new Address();
        address.setUf(addressDto.getUf());
        address.setCidade(addressDto.getCidade());
        address.setBairro(addressDto.getBairro());
        address.setLogradouro(addressDto.getLogradouro());
        address.setNumero(addressDto.getNumero());
        address.setComplemento(addressDto.getComplemento());
        address.setCep(addressDto.getCep());
        address.setUser(user);

        addressRepository.save(address);
    }


    public Address getAddressByUser(Integer userId) {
        Address address = addressRepository.findByUserId(userId);
        if(address == null){
            throw new CustomException("O usuário de id " + userId + " não possui endereco");
        }
        return address;
    }
}
