package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "web_order_quantities")
public class WebOrderQuantities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @ManyToOne
    @JoinColumn(name = "web_order_id")
    private WebOrder webOrder;
    @ManyToOne //Multiple orders can have the same product
    @JoinColumn(name = "product_id")
    private Product product_id;
    @Column(name = "quantity")
    private int quantity;
}
