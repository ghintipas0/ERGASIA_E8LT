package com.eshop.demo.controller;

import com.eshop.demo.DAO.UserDAO;
import com.eshop.demo.entity.User;
import com.eshop.demo.exception.UsersAlreadyExists;
import com.eshop.demo.model.LoginBody;
import com.eshop.demo.model.RegistrationBody;
import com.eshop.demo.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.transaction.AfterTransaction;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.web.servlet.function.ServerResponse.status;

@SpringBootTest
@AutoConfigureMockMvc
class AuthenticationControllerTest {

    @Autowired
    private UserService userService;
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private UserDAO userDAO;
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
    void testRegistration() throws Exception {
        String content = objectMapper.writeValueAsString(registrationBody);
        mockMvc.perform(MockMvcRequestBuilders.post("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(jsonPath("$.username",is("TestUsername")));

        mockMvc.perform(MockMvcRequestBuilders.post("/auth/register")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isConflict());
        userDAO.delete(userDAO.findByUsernameIgnoreCase("TestUsername").get());

    }


    @Test
    void testLogin() throws Exception {
        userService.addUser(registrationBody);
        LoginBody loginBody = new LoginBody("TestUsername","testpass");
        String content = objectMapper.writeValueAsString(loginBody);
        mockMvc.perform(MockMvcRequestBuilders.post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk());
        userDAO.delete(userDAO.findByUsernameIgnoreCase("TestUsername").get());
    }
    @Test
    void testLoginWrongUsername() throws Exception {
        userService.addUser(registrationBody);
        LoginBody loginBody = new LoginBody("TestUsername2","testpass");
        String content = objectMapper.writeValueAsString(loginBody);
        mockMvc.perform(MockMvcRequestBuilders.post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
        userDAO.delete(userDAO.findByUsernameIgnoreCase("TestUsername").get());
    }
    @Test
    void testLoginWrongPassword() throws Exception {
        userService.addUser(registrationBody);
        LoginBody loginBody = new LoginBody("TestUsername","testpass2");
        String content = objectMapper.writeValueAsString(loginBody);
        mockMvc.perform(MockMvcRequestBuilders.post("/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
        userDAO.delete(userDAO.findByUsernameIgnoreCase("TestUsername").get());
    }






}