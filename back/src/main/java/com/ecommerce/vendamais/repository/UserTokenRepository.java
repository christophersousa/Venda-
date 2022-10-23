package com.ecommerce.vendamais.repository;

import com.ecommerce.vendamais.model.AuthUserToken;
import com.ecommerce.vendamais.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserTokenRepository extends JpaRepository<AuthUserToken, Integer> {
    AuthUserToken findByUser(User user);
    AuthUserToken findByToken(String token);
}
