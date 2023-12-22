package com.eshop.demo.controller;

import com.eshop.demo.exception.UsersAlreadyExists;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class AppExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<String> handleException(UsersAlreadyExists usersAlreadyExists){
        return new ResponseEntity<>(usersAlreadyExists.getMessage(), HttpStatus.NOT_FOUND);
    }

}
