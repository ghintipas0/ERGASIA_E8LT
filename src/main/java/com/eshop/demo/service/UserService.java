package com.eshop.demo.service;

import com.eshop.demo.DAO.UserDAO;
import com.eshop.demo.entity.Address;
import com.eshop.demo.entity.User;
import com.eshop.demo.exception.UsersAlreadyExists;
import com.eshop.demo.model.RegistrationBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private UserDAO userDAO;
     private EncryptionService encryptionService;
    @Autowired
    public UserService(UserDAO userDAO,EncryptionService encryptionService) {
        this.userDAO = userDAO;
        this.encryptionService=encryptionService;
    }

    public User addUser(RegistrationBody registrationBody) throws UsersAlreadyExists {
        //TODO: NOT ALLOWED TO PASS 2 SAME RECORDS
        if(userDAO.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent() ||
                userDAO.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()){
                throw new UsersAlreadyExists("User already exists");
        }
        User user = new User();
        user.setUsername(registrationBody.getUsername());
        user.setEmail(registrationBody.getEmail());
        user.setLastName(registrationBody.getLastName());
        user.setfirstName(registrationBody.getFirstName());
        user.setPhoneNumber(registrationBody.getPhoneNumber());
        user.setBirthDate(registrationBody.getBirthDate());
        //TODO:ENCRYPT PASSWORD
        user.setPassword(encryptionService.encryptPassword(registrationBody.getPassword()));
        Address address = new Address();
        address.setAddressLine1(registrationBody.getAddressLine());
        address.setPostCode(registrationBody.getPostCode());
        address.setCountry(registrationBody.getCountry());
        address.setCity(registrationBody.getCity());
        user.addAddress(address);
        user = userDAO.save(user);
        return user;
    }



}
