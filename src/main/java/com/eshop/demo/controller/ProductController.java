package com.eshop.demo.controller;

import com.eshop.demo.entity.Product;
import com.eshop.demo.exception.ProductNotFound;
import com.eshop.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController{
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/ShopNow")
    public List<Product> getAllProducts() {
        return productService.findAllProducts();
    }
    @GetMapping("/search")
    public List<Product> searchProduct(@Param("keyword") String keyword)  {
        return productService.searchProducts(keyword);

    }


}
