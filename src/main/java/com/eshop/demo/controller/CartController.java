package com.eshop.demo.controller;

import com.eshop.demo.DAO.ProductDAO;
import com.eshop.demo.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
public class CartController {
    private ProductDAO productDAO;

    @Autowired
    public CartController(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    @PostMapping("/cart")
    public ResponseEntity<?> addToCart(@RequestBody List<Integer> ids){

        return new ResponseEntity<>(productDAO.cart(ids), HttpStatus.OK);
    }
}
