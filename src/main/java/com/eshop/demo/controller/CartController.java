package com.eshop.demo.controller;

import com.eshop.demo.DAO.ProductDAO;
import com.eshop.demo.entity.Product;
import com.eshop.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Objects;

@RestController
public class CartController {
    private final ProductService productService;

    @Autowired
    public CartController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/cart")
    public ResponseEntity<List<Product>> addToCart(@RequestBody List<String> ids){
        return new ResponseEntity<>(productService.cart(ids), HttpStatus.OK);
    }
}
