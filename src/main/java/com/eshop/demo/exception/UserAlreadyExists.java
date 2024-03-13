package com.eshop.demo.exception;

public class UserAlreadyExists extends Exception{

    public UserAlreadyExists(String message) {
        super(message);
    }
}
