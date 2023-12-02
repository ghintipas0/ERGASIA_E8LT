package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "address_line_1")
    private String address_line_1;
    @Column(name = "city")
    private String city;
    @Column(name = "country")
    private String country;
    @Column(name = "post_code")
    private String post_code;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
