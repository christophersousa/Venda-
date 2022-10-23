package com.ecommerce.vendamais.repository;

import com.ecommerce.vendamais.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
    Company findByCnpj(String cnpj);

    Company findByEmail(String email);
}
