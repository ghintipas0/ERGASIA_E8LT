package com.eshop.demo.service;

import com.eshop.demo.DAO.WebOrderDAO;
import com.eshop.demo.DAO.WebOrderQuantitiesDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    private WebOrderQuantitiesDAO webOrderQuantitiesDAO;
    private WebOrderDAO webOrderDAO;
    @Autowired
    public OrderService(WebOrderQuantitiesDAO webOrderQuantitiesDAO, WebOrderDAO webOrderDAO) {
        this.webOrderQuantitiesDAO = webOrderQuantitiesDAO;
        this.webOrderDAO = webOrderDAO;
    }


}
