package com.eshop.demo.service;

import com.eshop.demo.DAO.ProductDAO;
import com.eshop.demo.entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductDAO productDAO;

    @Autowired
    public ProductService(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    public List<Product>  findAllProducts(){

        return productDAO.findProducts();
    }

}
