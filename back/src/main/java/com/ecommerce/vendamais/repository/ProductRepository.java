package com.ecommerce.vendamais.repository;

import com.ecommerce.vendamais.model.Company;
import com.ecommerce.vendamais.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAllByTypeId(int typeId);

//    @Query(value="select p from Product p join fetch p.company c where c.id = :company")
    List<Product> findAllByCompany(Company company);
}