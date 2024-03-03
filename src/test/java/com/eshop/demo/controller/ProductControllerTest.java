package com.eshop.demo.controller;
import com.eshop.demo.model.ProductBody;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ProductControllerTest {
    @Autowired
    private MockMvc mockMVC;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void testProductList() throws Exception {
        mockMVC.perform(get("/ShopNow")).andExpect(status().is(HttpStatus.OK.value()));
    }

    @Test
    @WithMockUser(username="admin", roles={"ADMIN"})
    public void testAddProduct() throws Exception {
        ProductBody productBody = new ProductBody("TestProduct","TestDesc",5,1,"Sony","");
        String requestBody= objectMapper.writeValueAsString(productBody);
        mockMVC.perform(post("/Products")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody))
                .andExpect(status().is(HttpStatus.OK.value()));

    }


}