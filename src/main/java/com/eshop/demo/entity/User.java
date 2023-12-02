package com.eshop.demo.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "password")
    private String password;
    @Column(name = "email")
    private String email;
    @Column(name = "first_name")
    private String first_name;
    @Column(name = "last_name")
    private String last_name;
    @OneToMany(mappedBy = "user",cascade = CascadeType.REMOVE)//one user can have many addresses. If a user remove from the db we want to erase his addresses.
    private List<Address> addresses = new ArrayList<>();
}
