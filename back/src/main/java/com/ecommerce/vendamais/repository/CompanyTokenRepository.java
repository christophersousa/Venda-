package com.ecommerce.vendamais.repository;

import com.ecommerce.vendamais.model.AuthCompanyToken;
import com.ecommerce.vendamais.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyTokenRepository extends JpaRepository<AuthCompanyToken, Integer> {
    AuthCompanyToken findByCompany(Company company);
    AuthCompanyToken findByToken(String token);
}
