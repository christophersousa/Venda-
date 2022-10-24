package com.example.authentication.repository;

import com.example.authentication.model.AuthUserToken;
import com.example.authentication.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserTokenRepository extends JpaRepository<AuthUserToken, Integer> {
    AuthUserToken findByUser(User user);
    AuthUserToken findByToken(String token);
}
