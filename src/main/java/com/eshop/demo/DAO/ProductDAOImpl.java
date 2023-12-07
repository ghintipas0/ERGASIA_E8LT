package com.eshop.demo.DAO;

import com.eshop.demo.entity.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@Repository
public class ProductDAOImpl implements ProductDAO{
    private EntityManager entityManager;
    @Autowired
    public ProductDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }
    @Override
    public List<Product> findProducts(){

        TypedQuery query = entityManager.createQuery(
                "(SELECT p.name,p.price,p.photo FROM Product p WHERE p.category.id=1) UNION ALL (SELECT p.name,p.price,p.photo FROM Product p WHERE p.category.id=2) UNION ALL (SELECT p.name,p.price,p.photo FROM Product p WHERE p.category.id=3)",Product.class);

        return query.getResultList();

    }

}
