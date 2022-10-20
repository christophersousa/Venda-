package com.ecommerce.vendamais.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "photos")
public class Photo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private @NotNull String name;
    private @NotNull byte[] imgBytes;

    @ManyToOne
    @JoinColumn(name = "product_id")
    Product product;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public @NotNull byte[] getImgBytes() {
        return imgBytes;
    }
    public void setImgBytes(byte[] imgBytes) {
        this.imgBytes = imgBytes;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }
}
