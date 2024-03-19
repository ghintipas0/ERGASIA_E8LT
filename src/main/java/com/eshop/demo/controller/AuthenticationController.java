package com.eshop.demo.controller;

import com.eshop.demo.entity.User;
import com.eshop.demo.exception.UserNotVerifiedException;
import com.eshop.demo.exception.UserAlreadyExists;
import com.eshop.demo.model.LoginBody;
import com.eshop.demo.model.RegistrationBody;
import com.eshop.demo.service.UserService;
import jakarta.validation.Valid;
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
    private final UserService userService;

    @Autowired
    public AuthenticationController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<User> registration(@Valid @RequestBody RegistrationBody registrationBody) throws UserAlreadyExists {
        User user = userService.addUser(registrationBody);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginBody loginBody)  throws UserNotVerifiedException {
        String message = userService.loginUser(loginBody);
        return new ResponseEntity<>(message, HttpStatus.OK);
    }   
}
