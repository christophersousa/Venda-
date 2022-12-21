package com.ecommerce.vendamais.repository;

import com.ecommerce.vendamais.model.Company;
import com.ecommerce.vendamais.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderItemsRepository extends JpaRepository<OrderItem, Integer> {
    List<OrderItem> findAllByOrderId(Integer orderId);

    List<OrderItem> findAllByCompany(Company company);
}