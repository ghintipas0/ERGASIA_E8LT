package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "card_number")
    private String card_number;
    @Column(name = "holder_name")
    private String holder_name;
    @Column(name = "expire_date")
    private String expire_date;
}
