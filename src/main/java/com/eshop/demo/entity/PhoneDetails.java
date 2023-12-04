package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "phone_details")
public class PhoneDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product;
    @Column(name = "processor_brand")
    private String processor_brand;
    @Column(name = "processor_cores")
    private String processor_cores;
    @Column(name = "ram")
    private String ram;
    @Column(name = "storage")
    private String storage;
    @Column(name = "back_camera")
    private String back_camera;
    @Column(name = "front_camera")
    private String front_camera;
    @Column(name = "display_size")
    private String display_size;
    @Column(name = "resolution")
    private String resolution;
    @Column(name = "operating_system")
    private String operating_system;
    @Column(name = "battery_capacity")
    private String battery_capacity;
    @Column(name = "connection_network")
    private String connection_network;

    public PhoneDetails() {
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

    public String getProcessor_brand() {
        return processor_brand;
    }

    public void setProcessor_brand(String processor_brand) {
        this.processor_brand = processor_brand;
    }

    public String getProcessor_cores() {
        return processor_cores;
    }

    public void setProcessor_cores(String processor_cores) {
        this.processor_cores = processor_cores;
    }

    public String getRam() {
        return ram;
    }

    public void setRam(String ram) {
        this.ram = ram;
    }

    public String getStorage() {
        return storage;
    }

    public void setStorage(String storage) {
        this.storage = storage;
    }

    public String getBack_camera() {
        return back_camera;
    }

    public void setBack_camera(String back_camera) {
        this.back_camera = back_camera;
    }

    public String getFront_camera() {
        return front_camera;
    }

    public void setFront_camera(String front_camera) {
        this.front_camera = front_camera;
    }

    public String getDisplay_size() {
        return display_size;
    }

    public void setDisplay_size(String display_size) {
        this.display_size = display_size;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }

    public String getOperating_system() {
        return operating_system;
    }

    public void setOperating_system(String operating_system) {
        this.operating_system = operating_system;
    }

    public String getBattery_capacity() {
        return battery_capacity;
    }

    public void setBattery_capacity(String battery_capacity) {
        this.battery_capacity = battery_capacity;
    }

    public String getConnection_network() {
        return connection_network;
    }

    public void setConnection_network(String connection_network) {
        this.connection_network = connection_network;
    }

    @Override
    public String toString() {
        return "PhoneDetails{" +
                "id=" + id +
                ", product=" + product +
                ", processor_brand='" + processor_brand + '\'' +
                ", processor_cores='" + processor_cores + '\'' +
                ", ram='" + ram + '\'' +
                ", storage='" + storage + '\'' +
                ", back_camera='" + back_camera + '\'' +
                ", front_camera='" + front_camera + '\'' +
                ", display_size='" + display_size + '\'' +
                ", resolution='" + resolution + '\'' +
                ", operating_system='" + operating_system + '\'' +
                ", battery_capacity='" + battery_capacity + '\'' +
                ", connection_network='" + connection_network + '\'' +
                '}';
    }
}
