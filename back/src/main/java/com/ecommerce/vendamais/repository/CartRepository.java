package com.ecommerce.vendamais.repository;

import com.ecommerce.vendamais.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Integer> {
}
