package com.ecommerce.vendamais.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecommerce.vendamais.exceptions.CustomException;
import com.ecommerce.vendamais.model.Cart;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.model.Venda;
import com.ecommerce.vendamais.repository.CartRepository;
import com.ecommerce.vendamais.repository.VendaRepository;

@Service
public class VendaService {

    @Autowired
    private VendaRepository vendaRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private CartService cartRepository;

    public void addVenda(User user) {
        List<Cart> cartList = cartRepository.findAll(user);

        if (cartList.size() < 1) {
            throw new CustomException("O usuário deve ter itens no carrinho para efetuar a compra: " + user);
        }

        for (Cart cart : cartList) {

            Venda venda = new Venda();
            venda.setProduto(cart.getProduto());
            venda.setUsuario(cart.getUsuario());
            venda.setCompany(cart.getProduto().getCompany());
            venda.setQuantidade(cart.getQuantidade());
            vendaRepository.save(venda);

            cartRepository.deleteCartItem(cart.getId(), cart.getUsuario());
        }
    }

    public List<Venda> getVendaList(User user) {
        List<Venda> vendaList = vendaRepository.findAllByUsuario(user);
        return vendaList;
    }

}
