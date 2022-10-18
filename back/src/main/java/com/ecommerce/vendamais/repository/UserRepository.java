package com.ecommerce.vendamais.repository;

import com.ecommerce.vendamais.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    User findByCpf(String cpf);

    User findByEmail(String email);
}
