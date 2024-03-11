package com.eshop.demo.model;


import java.util.HashMap;

public class OrderBody {
    private String addressLine1;
    private String cardNumber;
    private String holderName;
    private String expireDate;
    private HashMap<Integer,Integer> productQuantities;

    public OrderBody() {
    }

    public OrderBody(String addressLine1, String cardNumber, String holderName, String expireDate, HashMap<Integer, Integer> productQuantities) {
        this.addressLine1 = addressLine1;
        this.cardNumber = cardNumber;
        this.holderName = holderName;
        this.expireDate = expireDate;
        this.productQuantities = productQuantities;
    }

    public String getAddressLine1() {
        return addressLine1;
    }

    public void setAddressLine1(String addressLine1) {
        this.addressLine1 = addressLine1;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public String getHolderName() {
        return holderName;
    }

    public void setHolderName(String holderName) {
        this.holderName = holderName;
    }

    public String getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(String expireDate) {
        this.expireDate = expireDate;
    }

    public HashMap<Integer, Integer> getProductQuantities() {
        return productQuantities;
    }

    public void setProductQuantities(HashMap<Integer, Integer> productQuantities) {
        this.productQuantities = productQuantities;
    }

    @Override
    public String toString() {
        return "OrderBody{" +
                "addressLine1='" + addressLine1 + '\'' +
                ", cardNumber='" + cardNumber + '\'' +
                ", holderName='" + holderName + '\'' +
                ", expireDate='" + expireDate + '\'' +
                ", productQuantities=" + productQuantities +
                '}';
    }
}
