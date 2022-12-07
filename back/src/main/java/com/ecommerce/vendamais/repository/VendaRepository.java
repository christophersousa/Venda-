package com.ecommerce.vendamais.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.model.Venda;

public interface VendaRepository extends JpaRepository<Venda, Integer> {
    List<Venda> findAllByUsuario(User use);
}
