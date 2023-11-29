package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "web_order_quantities")
public class Web_order_quantities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @ManyToOne
    @JoinColumn(name = "web_order_id")
    private Web_order web_order_id;
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product_id;
    @Column(name = "quantity")
    private int quantity;
}
