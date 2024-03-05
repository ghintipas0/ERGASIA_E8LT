package com.eshop.demo.DAO;

import com.eshop.demo.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressDAO extends JpaRepository<Address,Integer> {
}
