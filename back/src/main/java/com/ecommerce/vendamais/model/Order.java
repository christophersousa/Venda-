package com.ecommerce.vendamais.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "pedido")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "created_date")
    private Date createdDate;
    @Column(name = "valor_total")
    private double valorTotal;

    @OneToMany(mappedBy = "order", fetch = FetchType.LAZY)
    private List<OrderItem> pedidoItens;

    @ManyToOne()
    @JsonIgnore
    @JoinColumn(name = "usuario_id", referencedColumnName = "id")
    private User user;

    public Order() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public double getValorTotal() {
        return valorTotal;
    }

    public void setValorTotal(double valorTotal) {
        this.valorTotal = valorTotal;
    }

    public List<OrderItem> getPedidoItens() {
        return pedidoItens;
    }

    public void setPedidoItens(List<OrderItem> pedidoItens) {
        this.pedidoItens = pedidoItens;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
