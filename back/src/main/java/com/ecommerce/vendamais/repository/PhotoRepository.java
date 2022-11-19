package com.ecommerce.vendamais.repository;


import com.ecommerce.vendamais.model.Photo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PhotoRepository extends JpaRepository<Photo, Integer> {
    Photo findByProduct_Id(Integer id);

    void deleteByProduct_Id(Integer id);
}
