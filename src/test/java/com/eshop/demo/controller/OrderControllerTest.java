package com.eshop.demo.controller;

import ch.qos.logback.core.net.ObjectWriter;
import com.eshop.demo.DAO.WebOrderDAO;
import com.eshop.demo.entity.User;
import com.eshop.demo.model.LoginBody;
import com.eshop.demo.model.OrderBody;
import com.eshop.demo.model.RegistrationBody;
import com.eshop.demo.service.JWTService;
import com.eshop.demo.service.OrderService;
import com.eshop.demo.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.io.TempDir;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class OrderControllerTest {
    @Autowired
    private MockMvc mockMVC;

    @Autowired
    private UserService userService;
    @Autowired
    private JWTService jwtService;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private WebOrderDAO webOrderDAO;
    @Autowired
    private OrderService orderService;
    private final RegistrationBody registrationBody = new RegistrationBody(
            "TestUsername"
            ,"test@gmail.com"
            ,"testpass"
            ,"testFirstName"
            ,"testLastName"
            ,"6874324223"
            ,"2001/08/03"
            ,"Greece"
            ,"Athens"
            ,"Aretis 3"
            ,"13122");

    @Test
    void testAddOrderSuccessful() throws Exception {
        User user=userService.addUser(registrationBody);
        HashMap<Integer,Integer> quantities= new HashMap<>();
        quantities.put(3,4);
        quantities.put(1,2);
        quantities.put(10,3);
        OrderBody order = new OrderBody("Aretis 3","284729834729834","Test","04/26",quantities);
        String content = objectMapper.writeValueAsString(order);
        mockMVC.perform(MockMvcRequestBuilders
                .post("/orders")
                        .header("Authorization","Bearer "+jwtService.generateToken(user))
                .contentType(MediaType.APPLICATION_JSON)
                .content(content))
                .andExpect(status().isOk());
        userService.deleteUser(user.getId());
    }

    @Test
    void testAddOrderUnauthorized() throws Exception {
        HashMap<Integer,Integer> quantities= new HashMap<>();
        quantities.put(3,4);
        quantities.put(1,2);
        quantities.put(10,3);
        OrderBody order = new OrderBody("Aretis 3","284729834729834","Test","04/26",quantities);
        String content = objectMapper.writeValueAsString(order);
        mockMVC.perform(MockMvcRequestBuilders
                        .post("/orders")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(status().isUnauthorized());
    }
    @Test
    void testShowOrdersSuccessful() throws Exception {
        User user=userService.addUser(registrationBody);
        HashMap<Integer,Integer> quantities= new HashMap<>();
        quantities.put(3,4);
        quantities.put(1,2);
        quantities.put(10,3);
        OrderBody order = new OrderBody("Aretis 3","284729834729834","Test","04/26",quantities);
        orderService.saveOrder(user,order);
        mockMVC.perform(MockMvcRequestBuilders
                        .get("/orders")
                        .header("Authorization","Bearer "+userService.loginUser(new LoginBody("TestUsername","testpass"))))
                        .andExpect(status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$",hasSize(1)))
                .andExpect(jsonPath("$[0].user.username",is("TestUsername")))
                .andExpect(jsonPath("$[0].quantities",hasSize(3)));
        userService.deleteUser(user.getId());
    }
    @Test
    void testShowOrdersUnauthorized() throws Exception {
        mockMVC.perform(MockMvcRequestBuilders
                        .get("/orders"))
                .andExpect(status().isUnauthorized());
    }
}