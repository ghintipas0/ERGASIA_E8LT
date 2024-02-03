package com.eshop.demo.service;

import com.eshop.demo.DAO.CategoryDAO;
import com.eshop.demo.DAO.ProductDAO;
import com.eshop.demo.entity.Category;
import com.eshop.demo.entity.Product;
import com.eshop.demo.exception.ProductNotFound;
import com.eshop.demo.model.ProductBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    private ProductDAO productDAO;
    private CategoryDAO categoryDAO;

    @Autowired
    public ProductService(ProductDAO productDAO,CategoryDAO categoryDAO) {
        this.productDAO = productDAO;
        this.categoryDAO=categoryDAO;
    }

    public List<Product>  findAllProducts(){

        return productDAO.findProducts();
    }

    public List<Product>  searchProducts(String keyword)  {

        return productDAO.searchProducts(keyword);
    }
    public Product addProduct(ProductBody productBody){
        Product product = new Product();
        product.setName(productBody.getName());
        product.setLongDesc(productBody.getLongDesc());
        product.setPrice(productBody.getPrice());
        product.setBrand_name(productBody.getBrandName());
        product.setPhoto(productBody.getPhoto());
        Optional<Category> category = categoryDAO.findById(productBody.getCategory_id());
        if(category.isPresent()){
            product.setCategory(category.get());
        }
        return productDAO.addProduct(product);
    }

    public String removeProduct(int id ) throws ProductNotFound{
        Product product;
        if((product=productDAO.findProductById(id))!=null){
            productDAO.deleteProduct(product);
            return "The product delete successfully with id "+product.getId();
        }else{
            throw new ProductNotFound("The product was not found with id "+id);
        }
    }
}
