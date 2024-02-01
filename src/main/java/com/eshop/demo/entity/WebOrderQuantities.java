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
    private Product product;
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

    public Product getProductId() {
        return product;
    }

    public void setProduct_id(Product productId) {
        this.product = productId;
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
                ", product=" + product +
                ", quantity=" + quantity +
                '}';
    }
}
