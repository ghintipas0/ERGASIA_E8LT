package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "long_desc")
    private String longDesc;
    @Column(name = "price")
    private float price;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @Column(name = "brand_name")
    private String brand_name;
    @Column(name = "photo")
    private String photo;
    @OneToOne(mappedBy = "product",cascade = CascadeType.REMOVE)//if we delete a product we want to delete also from the inventory.
    private Inventory inventory;

    @OneToOne(mappedBy = "product",cascade = CascadeType.REMOVE)
    private PhoneDetails phoneDetails;
    @OneToOne(mappedBy = "product",cascade = CascadeType.REMOVE)
    private LaptopDetails laptopDetails;
    @OneToOne(mappedBy = "product",cascade = CascadeType.REMOVE)
    private TelevisionDetails televisionDetails;


}
