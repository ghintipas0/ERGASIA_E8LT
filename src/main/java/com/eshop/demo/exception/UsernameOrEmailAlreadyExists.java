package com.eshop.demo.exception;

public class UsernameOrEmailAlreadyExists extends Exception{
    public UsernameOrEmailAlreadyExists(String message) {
        super(message);
    }
}
