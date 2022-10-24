package com.example.authentication.repository;


import com.example.authentication.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {
    Company findByCnpj(String cnpj);

    Company findByEmail(String email);
}
