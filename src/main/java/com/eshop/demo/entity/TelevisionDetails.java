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
    private String screenSize;
    @Column(name = "screen_resolution")
    private String screenResolution;
    @Column(name = "renewal_rate")
    private String renewalRate;
    @Column(name = "sound_standards")
    private String soundStandards;
    @Column(name = "power")
    private String power;
    @Column(name = "supported_applications")
    private String supportedApplications;
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

    public String getScreenSize() {
        return screenSize;
    }

    public void setScreenSize(String screenSize) {
        this.screenSize = screenSize;
    }

    public String getScreenResolution() {
        return screenResolution;
    }

    public void setScreenResolution(String screenResolution) {
        this.screenResolution = screenResolution;
    }

    public String getRenewalRate() {
        return renewalRate;
    }

    public void setRenewalRate(String renewalRate) {
        this.renewalRate = renewalRate;
    }

    public String getSoundStandards() {
        return soundStandards;
    }

    public void setSoundStandards(String soundStandards) {
        this.soundStandards = soundStandards;
    }

    public String getPower() {
        return power;
    }

    public void setPower(String power) {
        this.power = power;
    }

    public String getSupported_applications() {
        return supportedApplications;
    }

    public void setSupportedApplications(String supportedApplications) {
        this.supportedApplications = supportedApplications;
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
                ", screenSize='" + screenSize + '\'' +
                ", screenResolution='" + screenResolution + '\'' +
                ", renewalRate='" + renewalRate + '\'' +
                ", soundStandards='" + soundStandards + '\'' +
                ", power='" + power + '\'' +
                ", supportedApplications='" + supportedApplications + '\'' +
                ", connectorType='" + connectorType + '\'' +
                ", weight='" + weight + '\'' +
                '}';
    }
}
