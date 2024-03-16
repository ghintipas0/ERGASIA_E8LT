package com.eshop.demo.DAO;

import com.eshop.demo.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PaymentDAO extends JpaRepository<Payment,Integer> {
    Optional<Payment> findByCardNumber(String cardNumber);
}
