package com.eshop.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "television_details")
public class Television_details {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @OneToOne
    @JoinColumn(name = "product_id")
    private Product product_id;
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
    @Column(name = "wi_fi")
    private Boolean wi_fi;
    @Column(name = "bluetooth")
    private String bluetooth;
    @Column(name = "weight")
    private String weight;
}
