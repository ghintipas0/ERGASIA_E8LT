/*
package com.eshop.demo.DAO;

import com.eshop.demo.entity.User;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDAOImpl implements UserDAO{
    private EntityManager entityManager;

    @Autowired
    public UserDAOImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public User findByUsername(String username) {
        TypedQuery<User> theQuery = entityManager.createQuery("FROM User where username=:data", User.class);
        theQuery.setParameter("data",username);
        return theQuery.getSingleResult();
    }

    @Override
    public User findByEmail(String email) {
        TypedQuery<User> theQuery = entityManager.createQuery("FROM User where email=:data", User.class);
        theQuery.setParameter("data",email);
        return theQuery.getSingleResult();
    }

    public User save(User user){
         return entityManager.merge(user);
    }
}
*/
