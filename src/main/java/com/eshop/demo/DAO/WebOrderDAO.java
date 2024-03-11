package com.eshop.demo.DAO;

import com.eshop.demo.entity.WebOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
public interface WebOrderDAO extends JpaRepository<WebOrder,Integer> {
    List<WebOrder> findByUserId(int id);
}
