package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "phone_details")
public class PhoneDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(name = "processor_brand")
    private String processor_brand;
    @Column(name = "processor_cores")
    private String processor_cores;
    @Column(name = "ram")
    private String ram;
    @Column(name = "storage")
    private String storage;
    @Column(name = "back_camera")
    private String back_camera;
    @Column(name = "front_camera")
    private String front_camera;
    @Column(name = "display_size")
    private String display_size;
    @Column(name = "resolution")
    private String resolution;
    @Column(name = "operating_system")
    private String operating_system;
    @Column(name = "battery_capacity")
    private String battery_capacity;
    @Column(name = "connection_network")
    private String connection_network;
}
