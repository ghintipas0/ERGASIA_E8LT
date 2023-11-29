package com.eshop.demo.DAO;

import com.eshop.demo.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductDAO extends JpaRepository<Product,Long> {

}
