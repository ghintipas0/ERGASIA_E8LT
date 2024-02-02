package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "laptop_details")
public class LaptopDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(name = "cpu")
    private String cpu;
    @Column(name = "frequency")
    private String frequency;
    @Column(name = "screen_size")
    private String screenSize;
    @Column(name = "screen_resolution")
    private String screenResolution;
    @Column(name = "capabilities")
    private String capabilities;
    @Column(name = "renewal_rate")
    private String renewalRate;
    @Column(name = "ram")
    private String ram;
    @Column(name = "type_of_hard_disc")
    private String typeOfHardDisc;
    @Column(name = "hard_disc_capacity")
    private String hardDiscCapacity;
    @Column(name = "operating_system")
    private String operatingSystem;
    @Column(name = "weight")
    private String weight;


    public LaptopDetails() {
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

    public String getCpu() {
        return cpu;
    }

    public void setCpu(String cpu) {
        this.cpu = cpu;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
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

    public String getCapabilities() {
        return capabilities;
    }

    public void setCapabilities(String capabilities) {
        this.capabilities = capabilities;
    }

    public String getRenewalRate() {
        return renewalRate;
    }

    public void setRenewalRate(String renewalRate) {
        this.renewalRate = renewalRate;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getTypeOfHardDisc() {
        return typeOfHardDisc;
    }

    public void setTypeOfHardDisc(String typeOfHardDisc) {
        this.typeOfHardDisc = typeOfHardDisc;
    }

    public String getHardDiscCapacity() {
        return hardDiscCapacity;
    }

    public void setHardDiscCapacity(String hardDiscCapacity) {
        this.hardDiscCapacity = hardDiscCapacity;
    }

    public String getOperatingSystem() {
        return operatingSystem;
    }

    public void setOperatingSystem(String operatingSystem) {
        this.operatingSystem = operatingSystem;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    @Override
    public String toString() {
        return "LaptopDetails{" +
                "id=" + id +
                ", product=" + product +
                ", cpu='" + cpu + '\'' +
                ", frequency='" + frequency + '\'' +
                ", screenSize='" + screenSize + '\'' +
                ", screen_resolution='" + screenResolution + '\'' +
                ", capabilities='" + capabilities + '\'' +
                ", renewalRate='" + renewalRate + '\'' +
                ", ram='" + ram + '\'' +
                ", type_of_hard_disc='" + typeOfHardDisc + '\'' +
                ", hardDiscCapacity='" + hardDiscCapacity + '\'' +
                ", operating_system='" + operatingSystem + '\'' +
                ", weight='" + weight + '\'' +
                '}';
    }
}
