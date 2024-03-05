package com.eshop.demo.DAO;

import com.eshop.demo.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AddressDAO extends JpaRepository<Address,Integer> {

}
