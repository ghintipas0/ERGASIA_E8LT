package com.eshop.demo.controller;

import com.eshop.demo.entity.Product;
import com.eshop.demo.exception.CategoryNotFound;
import com.eshop.demo.exception.ProductNotFound;
import com.eshop.demo.model.ProductBody;
import com.eshop.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/ShopNow/search")
    public List<Product> searchProduct(@Param("keyword") String keyword)  {
        return productService.searchProducts(keyword);

    }
    @PostMapping("/Products")
    public Product addProduct(@RequestBody ProductBody productBody){
        return productService.addProduct(productBody);
    }

    @DeleteMapping("/Products/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable int productId) throws ProductNotFound {
        return new ResponseEntity<>(productService.removeProduct(productId), HttpStatus.OK);
    }

    @GetMapping("/ShopNow/{categoryId}")
    public ResponseEntity<?> getProducts(@PathVariable int categoryId) throws CategoryNotFound {
        return new ResponseEntity<>(productService.getProductsByCategoryId(categoryId),HttpStatus.OK);
    }


}
