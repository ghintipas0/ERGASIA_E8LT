package com.eshop.demo.model;

import jakarta.validation.constraints.*;

public class RegistrationBody {
    @NotNull
    @NotBlank
    @Size(min = 6,max = 10)
    private String username;
    @NotNull
    @NotBlank
    @Email
    private String email;
    @NotNull
    @NotBlank
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$",message = "The password must have at least one capital letter,one symbol and one number")
    private String password;
    @NotNull
    @NotBlank
    @Pattern(regexp ="^[a-zA-Z]+$")
    private String firstName;
    @NotNull
    @NotBlank
    @Pattern(regexp ="^[a-zA-Z]+$")
    private String lastName;
    @NotNull
    @NotBlank
    @Pattern(regexp = "^\\d{10}$")
    private String phoneNumber;
    @NotNull
    @NotBlank
    private String birthDate;
    @NotNull
    @NotBlank
    private String country;
    @NotNull
    @NotBlank
    private String city;
    @NotNull
    @NotBlank
    private String addressLine;
    @NotNull
    @NotBlank
    @Pattern(regexp = "^\\d{5}$")
    private String postCode;

    public RegistrationBody() {
    }
    public RegistrationBody(String username, String email, String password, String firstName, String lastName, String phoneNumber, String birthDate, String country, String city, String addressLine, String postCode) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.birthDate = birthDate;
        this.country = country;
        this.city = city;
        this.addressLine = addressLine;
        this.postCode = postCode;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(String birthDate) {
        this.birthDate = birthDate;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getAddressLine() {
        return addressLine;
    }

    public void setAddressLine(String addressLine) {
        this.addressLine = addressLine;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    @Override
    public String toString() {
        return "RegistrationBody{" +
                "username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", birthDate='" + birthDate + '\'' +
                ", country='" + country + '\'' +
                ", city='" + city + '\'' +
                ", addressLine='" + addressLine + '\'' +
                ", postCode='" + postCode + '\'' +
                '}';
    }
}
