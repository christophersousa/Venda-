package com.ecommerce.vendamais.repository;

import com.ecommerce.vendamais.model.Cart;
import com.ecommerce.vendamais.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    List<Cart> findAllByUsuario(User user);

    void deleteByUsuario(User user);
}
