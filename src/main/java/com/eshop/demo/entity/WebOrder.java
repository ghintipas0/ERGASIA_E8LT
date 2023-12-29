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

    public WebOrder() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<WebOrderQuantities> getQuantities() {
        return quantities;
    }

    public void setQuantities(List<WebOrderQuantities> quantities) {
        this.quantities = quantities;
    }

    public Payment getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Payment payment_id) {
        this.payment_id = payment_id;
    }

    @Override
    public String toString() {
        return "WebOrder{" +
                "id=" + id +
                ", user=" + user +
                ", address=" + address +
                ", quantities=" + quantities +
                ", payment_id=" + payment_id +
                '}';
    }
}
