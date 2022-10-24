package com.example.authentication.repository;

import com.example.authentication.model.AuthCompanyToken;
import com.example.authentication.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyTokenRepository extends JpaRepository<AuthCompanyToken, Integer> {
    AuthCompanyToken findByCompany(Company company);
    AuthCompanyToken findByToken(String token);
}
