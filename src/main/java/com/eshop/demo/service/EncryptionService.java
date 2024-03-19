package com.eshop.demo.service;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class EncryptionService {
    @Value("${encryption.salt.rounds}")
    private int saltRounds;//first create the instance of this class and then do the injection of saltRounds, so we must use @PostConstructor
    private String salt;

    @PostConstruct
    public void postConstructor(){
        salt= BCrypt.gensalt(saltRounds);
    }
    public String encryptPassword(String password){
        return BCrypt.hashpw(password,salt);
    }

    public boolean verifyPassword(String password,String hash){
        return BCrypt.checkpw(password,hash);
    }
}
