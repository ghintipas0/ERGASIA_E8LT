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

    public WebOrderQuantities() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public WebOrder getWebOrder() {
        return webOrder;
    }

    public void setWebOrder(WebOrder webOrder) {
        this.webOrder = webOrder;
    }

    public Product getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Product product_id) {
        this.product_id = product_id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "WebOrderQuantities{" +
                "id=" + id +
                ", webOrder=" + webOrder +
                ", product_id=" + product_id +
                ", quantity=" + quantity +
                '}';
    }
}
