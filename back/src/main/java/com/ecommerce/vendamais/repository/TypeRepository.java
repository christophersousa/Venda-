package com.ecommerce.vendamais.repository;


import com.ecommerce.vendamais.model.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {

    List<Type> findAllByOrderByCategory_IdAscNomeAsc();
    List<Type> findTypeByCategory_IdOrderByNome(int categoryId);
}
