package com.eshop.demo.DAO;

import com.eshop.demo.entity.WebOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WebOrderDAO extends JpaRepository<WebOrder,Integer> {

}
