package com.eshop.demo.DAO;

import com.eshop.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDAO extends JpaRepository<User,Integer> {
     Optional<User> findByUsernameIgnoreCase(String username);
     Optional<User> findByEmailIgnoreCase(String email);
}
