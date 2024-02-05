package com.eshop.demo.controller;
import com.eshop.demo.entity.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController{

    @GetMapping("/ShopNow/profile")

    public ResponseEntity<?> profile(@AuthenticationPrincipal User user){//this will run before profile method as a result will inject the user instance even if is not authorize
        if(user==null){
            return new ResponseEntity<>("The user is not authorize", HttpStatus.UNAUTHORIZED);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }





}
