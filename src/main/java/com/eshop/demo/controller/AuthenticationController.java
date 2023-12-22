package com.eshop.demo.controller;

import com.eshop.demo.entity.User;
import com.eshop.demo.exception.UsersAlreadyExists;
import com.eshop.demo.model.RegistrationBody;
import com.eshop.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private UserService userService;
    @Autowired
    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registration(@RequestBody RegistrationBody registrationBody) throws UsersAlreadyExists {
        User user = userService.addUser(registrationBody);
        return new ResponseEntity<>(user, HttpStatus.OK);

    }

}
