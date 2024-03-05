package com.eshop.demo.DAO;

import com.eshop.demo.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentDAO extends JpaRepository<Payment,Integer> {
}
