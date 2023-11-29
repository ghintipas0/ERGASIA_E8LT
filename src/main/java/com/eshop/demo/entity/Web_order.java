package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "web_order")
public class Web_order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user_id;
    @OneToOne
    @JoinColumn(name = "address_id")
    private Address address_id;
    @OneToOne
    @JoinColumn(name = "payment_id")
    private Payment payment_id;
}
