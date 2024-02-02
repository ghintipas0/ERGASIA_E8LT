package com.eshop.demo.model;

import com.eshop.demo.entity.Category;
import jakarta.persistence.*;

public class ProductBody {


    private String name;
    private String longDesc;
    private float price;
    private int category_id;
    private String brandName;
    private String photo;


    public ProductBody() {
    }

    public ProductBody(String name, String longDesc, float price, int category_id,String brandName,String photo) {
        this.name = name;
        this.longDesc = longDesc;
        this.price = price;
        this.category_id = category_id;
        this.brandName=brandName;
        this.photo=photo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLongDesc() {
        return longDesc;
    }

    public void setLongDesc(String longDesc) {
        this.longDesc = longDesc;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public int getCategory_id() {
        return category_id;
    }

    public void setCategory_id(int category_id) {
        this.category_id = category_id;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    @Override
    public String toString() {
        return "ProductBody{" +
                "name='" + name + '\'' +
                ", longDesc='" + longDesc + '\'' +
                ", price=" + price +
                ", category_id=" + category_id +
                '}';
    }
}
