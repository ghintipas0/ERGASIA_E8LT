package com.eshop.demo.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "web_order")
public class WebOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne //many orders to the same address.
    @JoinColumn(name = "address_id")
    private Address address;
    @OneToMany(mappedBy = "webOrder",cascade = CascadeType.REMOVE)
    private List<WebOrderQuantities> quantities = new ArrayList<>();
    @OneToOne
    @JoinColumn(name = "payment_id")
    private Payment payment_id;
}
