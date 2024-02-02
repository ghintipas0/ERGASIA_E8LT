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
    private String processorBrand;
    @Column(name = "processor_cores")
    private String processorCores;
    @Column(name = "ram")
    private String ram;
    @Column(name = "storage")
    private String storage;
    @Column(name = "back_camera")
    private String backCamera;
    @Column(name = "front_camera")
    private String frontCamera;
    @Column(name = "display_size")
    private String displaySize;
    @Column(name = "resolution")
    private String resolution;
    @Column(name = "operating_system")
    private String operatingSystem;
    @Column(name = "battery_capacity")
    private String batteryCapacity;
    @Column(name = "connection_network")
    private String connectionNetwork;

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

    public String getProcessorBrand() {
        return processorBrand;
    }

    public void setProcessorBrand(String processorBrand) {
        this.processorBrand = processorBrand;
    }

    public String getProcessorCores() {
        return processorCores;
    }

    public void setProcessorCores(String processorCores) {
        this.processorCores = processorCores;
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

    public String getBackCamera() {
        return backCamera;
    }

    public void setBackCamera(String backCamera) {
        this.backCamera = backCamera;
    }

    public String getFrontCamera() {
        return frontCamera;
    }

    public void setFrontCamera(String frontCamera) {
        this.frontCamera = frontCamera;
    }

    public String getDisplaySize() {
        return displaySize;
    }

    public void setDisplaySize(String displaySize) {
        this.displaySize = displaySize;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }

    public String getOperating_system() {
        return operatingSystem;
    }

    public void setOperatingSystem(String operatingSystem) {
        this.operatingSystem = operatingSystem;
    }

    public String getBatteryCapacity() {
        return batteryCapacity;
    }

    public void setBatteryCapacity(String batteryCapacity) {
        this.batteryCapacity = batteryCapacity;
    }

    public String getConnectionNetwork() {
        return connectionNetwork;
    }

    public void setConnectionNetwork(String connection_network) {
        this.connectionNetwork = connectionNetwork;
    }

    @Override
    public String toString() {
        return "PhoneDetails{" +
                "id=" + id +
                ", product=" + product +
                ", processorBrand='" + processorBrand + '\'' +
                ", processorCores='" + processorCores + '\'' +
                ", ram='" + ram + '\'' +
                ", storage='" + storage + '\'' +
                ", backCamera='" + backCamera + '\'' +
                ", frontCamera='" + frontCamera + '\'' +
                ", displaySize='" + displaySize + '\'' +
                ", resolution='" + resolution + '\'' +
                ", operatingSystem='" + operatingSystem + '\'' +
                ", battery_capacity='" + batteryCapacity + '\'' +
                ", connection_network='" + connectionNetwork + '\'' +
                '}';
    }
}
