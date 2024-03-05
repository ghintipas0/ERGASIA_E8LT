package com.eshop.demo.controller;

import com.eshop.demo.entity.User;
import com.eshop.demo.entity.WebOrder;
import com.eshop.demo.model.OrderBody;
import com.eshop.demo.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class OrderController {
    private OrderService orderService;
    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping("/order")
    public ResponseEntity<WebOrder> order(@AuthenticationPrincipal User user, @RequestBody OrderBody orders){
        return new ResponseEntity<>(orderService.saveOrder(user, orders), HttpStatus.OK);
    }
}
