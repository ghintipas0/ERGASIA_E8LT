package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "short_desc")
    private String shortDesc;
    @Column(name = "long_desc")
    private String longDesc;
    @Column(name = "price")
    private float price;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;




}
