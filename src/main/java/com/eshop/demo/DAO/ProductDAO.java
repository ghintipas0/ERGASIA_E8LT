package com.eshop.demo.DAO;

import com.eshop.demo.entity.Product;
import jakarta.persistence.EntityManager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ProductDAO {
    public List<Product> findProducts();


}
