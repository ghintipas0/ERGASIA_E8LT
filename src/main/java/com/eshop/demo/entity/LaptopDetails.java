package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "phone_details")
public class LaptopDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(name = "cpu")
    private String cpu;
    @Column(name = "frequency")
    private String frequency;
    @Column(name = "screen_size")
    private String screen_size;
    @Column(name = "screen_resolution")
    private String screen_resolution;
    @Column(name = "capabilities")
    private String capabilities;
    @Column(name = "renewal_rate")
    private String renewal_rate;
    @Column(name = "ram")
    private String ram;
    @Column(name = "type_of_hard_disc")
    private String type_of_hard_disc;
    @Column(name = "hard_disc_capacity")
    private String hard_disc_capacity;
    @Column(name = "operating_system")
    private String operating_system;
    @Column(name = "weight")
    private String weight;
}
