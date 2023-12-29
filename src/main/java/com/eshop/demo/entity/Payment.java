package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "card_number")
    private String card_number;
    @Column(name = "holder_name")
    private String holder_name;
    @Column(name = "expire_date")
    private String expire_date;

    public Payment() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCard_number() {
        return card_number;
    }

    public void setCard_number(String card_number) {
        this.card_number = card_number;
    }

    public String getHolder_name() {
        return holder_name;
    }

    public void setHolder_name(String holder_name) {
        this.holder_name = holder_name;
    }

    public String getExpire_date() {
        return expire_date;
    }

    public void setExpire_date(String expire_date) {
        this.expire_date = expire_date;
    }

    @Override
    public String toString() {
        return "Payment{" +
                "id=" + id +
                ", card_number='" + card_number + '\'' +
                ", holder_name='" + holder_name + '\'' +
                ", expire_date='" + expire_date + '\'' +
                '}';
    }
}
