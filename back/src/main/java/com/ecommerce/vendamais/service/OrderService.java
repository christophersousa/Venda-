package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.common.StatusPedido;
import com.ecommerce.vendamais.dto.cart.CartDto;
import com.ecommerce.vendamais.dto.cart.CartItemDto;
import com.ecommerce.vendamais.exceptions.CustomException;
import com.ecommerce.vendamais.model.Order;
import com.ecommerce.vendamais.model.OrderItem;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.OrderItemsRepository;
import com.ecommerce.vendamais.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Service
@Transactional
public class OrderService {
    @Autowired
    CartService cartService;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderItemsRepository orderItemsRepository;

    public void createOrder(User user) {
        //busca os itens do carrinho do usuário
        CartDto cartDto = cartService.listCartItems(user);
        List<CartItemDto> cartItemDtoList = cartDto.getCartItems();

        //cria novo pedido
        Order newOrder = new Order();
        newOrder.setCreatedDate(new Date());
        newOrder.setUser(user);
        newOrder.setValorTotal(cartDto.getValorTotal());
        newOrder.setStatus(StatusPedido.EMITIDO);
        orderRepository.save(newOrder);

        //cria itens do pedido e adiciona ao pedido
        for(CartItemDto cartItemDto : cartItemDtoList){
            //adiciona ao pedido se houver estoque disponível
            if(cartItemDto.getProduto().getEstoque() > 0){
                OrderItem orderItem = new OrderItem();
                orderItem.setPreco(cartItemDto.getProduto().getPreco());
                orderItem.setQuantidade(cartItemDto.getQuantidade());
                orderItem.setProduct(cartItemDto.getProduto());
                orderItem.setCompany(cartItemDto.getProduto().getCompany());
                orderItem.setStatus(StatusPedido.EMITIDO);
                cartItemDto.getProduto().setEstoque(cartItemDto.getProduto().getEstoque() - 1);
                orderItem.setOrder(newOrder);
                orderItemsRepository.save(orderItem);
            }else{
                orderRepository.delete(newOrder);
                throw new CustomException("Produto de id " + cartItemDto.getProduto().getId() + "não possui estoque disponível");
            }

        }

        cartService.deleteUserCartItems(user);

    }


}
