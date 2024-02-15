package com.eshop.demo.controller;

import com.eshop.demo.model.OrderBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class OrderController {
    @GetMapping("/order")
    public void order(@RequestBody OrderBody orders ){
        //TODO: MAKE THE ORDER MECHANISM
        System.out.println(orders);
    }
}
