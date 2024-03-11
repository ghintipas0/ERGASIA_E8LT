package com.eshop.demo.controller;
import com.eshop.demo.DAO.ProductDAO;
import com.eshop.demo.entity.Product;
import com.eshop.demo.model.ProductBody;
import com.eshop.demo.service.ProductService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.junit.jupiter.api.Assertions.*;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class ProductControllerTest {
    @Autowired
    private MockMvc mockMVC;
    @Autowired
    private ObjectMapper objectMapper;
    @Autowired
    private ProductService productService;
    @Autowired
    private ProductDAO productDAO;
    private final ProductBody productBody = new ProductBody("TestProduct","TestDesc",5,1,"Sony","");
    @Test
    public void testProductList() throws Exception {
        mockMVC.perform(get("/ShopNow")).andExpect(status().is(HttpStatus.OK.value()));
    }

    @Test
    @WithMockUser(username="admin", roles={"ADMIN"})
    public void testAddProduct() throws Exception {
        String requestBody= objectMapper.writeValueAsString(productBody);
        mockMVC.perform(MockMvcRequestBuilders.post("/Products")
                        .contentType(MediaType.APPLICATION_JSON).content(requestBody))
                .andExpect(status().is(HttpStatus.OK.value()));

    }

    @Test
    @WithMockUser(username="admin", roles={"ADMIN"})
    public void testDeleteProduct() throws Exception{
        Product product = productService.addProduct(productBody);
        MvcResult result= mockMVC.perform(MockMvcRequestBuilders.delete("/Products/{productId}",product.getId())
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(HttpStatus.OK.value()))
                .andReturn();
        String response = result.getResponse().getContentAsString();
        assertEquals("The product delete successfully with id "+product.getId(),response);

        mockMVC.perform(MockMvcRequestBuilders.delete("/Products/{productId}", product.getId())
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNotFound());
    }

    @Test
    public void testGetProductsByCategoryId() throws Exception{
        mockMVC.perform(MockMvcRequestBuilders.get("/ShopNow/{categoryId}",1)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(HttpStatus.OK.value()));
        mockMVC.perform(MockMvcRequestBuilders.get("/ShopNow/{categoryId}",2)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(HttpStatus.OK.value()));
        mockMVC.perform(MockMvcRequestBuilders.get("/ShopNow/{categoryId}",3)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(HttpStatus.OK.value()));
        mockMVC.perform(MockMvcRequestBuilders.get("/ShopNow/{categoryId}",4)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(HttpStatus.NOT_FOUND.value()));
        mockMVC.perform(MockMvcRequestBuilders.get("/ShopNow/{categoryId}",0)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().is(HttpStatus.NOT_FOUND.value()));
    }

}