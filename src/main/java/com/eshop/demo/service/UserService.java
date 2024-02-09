package com.eshop.demo.service;

import com.eshop.demo.DAO.RoleDAO;
import com.eshop.demo.DAO.UserDAO;
import com.eshop.demo.entity.Address;
import com.eshop.demo.entity.Role;
import com.eshop.demo.entity.User;
import com.eshop.demo.exception.UserNotFound;
import com.eshop.demo.exception.UserNotVerifiedException;
import com.eshop.demo.exception.UsersAlreadyExists;
import com.eshop.demo.model.LoginBody;
import com.eshop.demo.model.RegistrationBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
     private UserDAO userDAO;
     private RoleDAO roleDAO;
     private EncryptionService encryptionService;
     private JWTService jwtService;

    @Autowired
    public UserService(UserDAO userDAO,RoleDAO roleDAO,EncryptionService encryptionService,JWTService jwtService) {
        this.userDAO = userDAO;
        this.roleDAO=roleDAO;
        this.encryptionService=encryptionService;
        this.jwtService=jwtService;
    }
    //CREATING THE REGISTER FUNCTION
    public User addUser(RegistrationBody registrationBody) throws UsersAlreadyExists {
        //TODO: NOT ALLOWED TO PASS 2 SAME RECORDS
        if(userDAO.findByEmailIgnoreCase(registrationBody.getEmail()).isPresent() ||
                userDAO.findByUsernameIgnoreCase(registrationBody.getUsername()).isPresent()){
                throw new UsersAlreadyExists("Username or Email already exists");
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
        //TODO: NOT ALLOWED TO PASS 2 SAME ADDRESSES
        address.setAddressLine1(registrationBody.getAddressLine());
        address.setPostCode(registrationBody.getPostCode());
        address.setCountry(registrationBody.getCountry());
        address.setCity(registrationBody.getCity());
        user.addAddress(address);
        userDAO.save(user);
        Role role = new Role();
        role.setUsername(user.getUsername());
        role.setRoleName("ROLE_USER");
        roleDAO.save(role);
        /*user =*/

        return user;
    }

    //TODO:CREATE THE LOGIN FORM
    public String loginUser(LoginBody loginBody) throws UserNotVerifiedException{
        Optional<User> user;
        if((user = userDAO.findByUsernameIgnoreCase(loginBody.getUsername())).isPresent()){
            User us = user.get();
            if(encryptionService.verifyPassword(loginBody.getPassword(),us.getPassword())){
                return jwtService.generateToken(us);
            }else{
                throw new UserNotVerifiedException("Wrong password");
            }
        }else{
             throw new UserNotVerifiedException("Wrong username");
        }
    }

    public String deleteUser(int id) throws UserNotFound{
        Optional<User> user = userDAO.findById(id);

        if(user.isPresent()){
            userDAO.delete(user.get());
            return "The user deleted successfully with id "+id;
        }else{
            throw new UserNotFound("The user is not found ");
        }
    }

    public boolean defineUser(String username){
        Optional<Role> role = roleDAO.findByUsernameIgnoreCase(username);
        //TODO: TO LEARN THE BELOW
        return role.map(value -> value.getRoleName().equals("ROLE_ADMIN")).orElse(false);
    }






}
