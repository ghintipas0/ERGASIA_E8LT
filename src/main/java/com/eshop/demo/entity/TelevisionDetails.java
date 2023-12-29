package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "television_details")
public class TelevisionDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(name = "screen_size")
    private String screen_size;
    @Column(name = "screen_resolution")
    private String screen_resolution;
    @Column(name = "renewal_rate")
    private String renewal_rate;
    @Column(name = "sound_standards")
    private String sound_standards;
    @Column(name = "power")
    private String power;
    @Column(name = "supported_applications")
    private String supported_applications;
    @Column(name = "connector_type")
    private String connectorType;

    @Column(name = "weight")
    private String weight;

    public TelevisionDetails() {
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

    public String getScreen_size() {
        return screen_size;
    }

    public void setScreen_size(String screen_size) {
        this.screen_size = screen_size;
    }

    public String getScreen_resolution() {
        return screen_resolution;
    }

    public void setScreen_resolution(String screen_resolution) {
        this.screen_resolution = screen_resolution;
    }

    public String getRenewal_rate() {
        return renewal_rate;
    }

    public void setRenewal_rate(String renewal_rate) {
        this.renewal_rate = renewal_rate;
    }

    public String getSound_standards() {
        return sound_standards;
    }

    public void setSound_standards(String sound_standards) {
        this.sound_standards = sound_standards;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public String getSupported_applications() {
        return supported_applications;
    }

    public void setSupported_applications(String supported_applications) {
        this.supported_applications = supported_applications;
    }

    public String getConnectorType() {
        return connectorType;
    }

    public void setConnectorType(String connectorType) {
        this.connectorType = connectorType;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "TelevisionDetails{" +
                "id=" + id +
                ", product=" + product +
                ", screen_size='" + screen_size + '\'' +
                ", screen_resolution='" + screen_resolution + '\'' +
                ", renewal_rate='" + renewal_rate + '\'' +
                ", sound_standards='" + sound_standards + '\'' +
                ", power='" + power + '\'' +
                ", supported_applications='" + supported_applications + '\'' +
                ", connectorType='" + connectorType + '\'' +
                ", weight='" + weight + '\'' +
                '}';
    }
}
