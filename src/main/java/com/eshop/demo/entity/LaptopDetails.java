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
    private String screen_size;
    @Column(name = "screen_resolution")
    private String screen_resolution;
    @Column(name = "capabilities")
    private String capabilities;
    @Column(name = "renewal_rate")
    private String renewal_rate;
    @Column(name = "ram")
    private String ram;
    @Column(name = "type_of_hard_disc")
    private String type_of_hard_disc;
    @Column(name = "hard_disc_capacity")
    private String hard_disc_capacity;
    @Column(name = "operating_system")
    private String operating_system;
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

    public String getCapabilities() {
        return capabilities;
    }

    public void setCapabilities(String capabilities) {
        this.capabilities = capabilities;
    }

    public String getRenewal_rate() {
        return renewal_rate;
    }

    public void setRenewal_rate(String renewal_rate) {
        this.renewal_rate = renewal_rate;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getType_of_hard_disc() {
        return type_of_hard_disc;
    }

    public void setType_of_hard_disc(String type_of_hard_disc) {
        this.type_of_hard_disc = type_of_hard_disc;
    }

    public String getHard_disc_capacity() {
        return hard_disc_capacity;
    }

    public void setHard_disc_capacity(String hard_disc_capacity) {
        this.hard_disc_capacity = hard_disc_capacity;
    }

    public String getOperating_system() {
        return operating_system;
    }

    public void setOperating_system(String operating_system) {
        this.operating_system = operating_system;
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
                ", screen_size='" + screen_size + '\'' +
                ", screen_resolution='" + screen_resolution + '\'' +
                ", capabilities='" + capabilities + '\'' +
                ", renewal_rate='" + renewal_rate + '\'' +
                ", ram='" + ram + '\'' +
                ", type_of_hard_disc='" + type_of_hard_disc + '\'' +
                ", hard_disc_capacity='" + hard_disc_capacity + '\'' +
                ", operating_system='" + operating_system + '\'' +
                ", weight='" + weight + '\'' +
                '}';
    }
}
