package com.eshop.demo.DAO;

import com.eshop.demo.entity.Product;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
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
        List<Product> products = null ;
        for(int i=1;i<=3;i++) {
            TypedQuery<Product> query = entityManager.createQuery("SELECT p.name,p.price,p.photo FROM Product p WHERE p.category.id=:data", Product.class);
            query.setParameter("data",i);
            query.setMaxResults(3);
            if(i==1){
                products = query.getResultList();
            }else{
                products.addAll(query.getResultList());
            }

        }
        return products;


    }

}
