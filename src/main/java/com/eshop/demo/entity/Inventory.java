package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "inventory")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(name = "in_stock_quantity")
    private int in_stock_quantity;

    public Inventory() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getIn_stock_quantity() {
        return in_stock_quantity;
    }

    public void setIn_stock_quantity(int in_stock_quantity) {
        this.in_stock_quantity = in_stock_quantity;
    }

    @Override
    public String toString() {
        return "Inventory{" +
                "id=" + id +
                ", product=" + product +
                ", in_stock_quantity=" + in_stock_quantity +
                '}';
    }
}
