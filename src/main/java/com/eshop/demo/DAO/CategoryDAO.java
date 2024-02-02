package com.eshop.demo.DAO;

import com.eshop.demo.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDAO extends JpaRepository<Category,Integer> {

}
