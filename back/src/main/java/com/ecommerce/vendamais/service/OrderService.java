package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.common.StatusPedido;
import com.ecommerce.vendamais.dto.cart.CartDto;
import com.ecommerce.vendamais.dto.cart.CartItemDto;
import com.ecommerce.vendamais.dto.order.OrderItemDto;
import com.ecommerce.vendamais.exceptions.CustomException;
import com.ecommerce.vendamais.model.Order;
import com.ecommerce.vendamais.model.OrderItem;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.OrderItemsRepository;
import com.ecommerce.vendamais.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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


    public List<Order> getOrdersByUser(User user) {
        return orderRepository.findAllByUserOrderByCreatedDateDesc(user);
    }


    public List<OrderItemDto> getOrderItens(int orderId) {
        List<OrderItem> orderItemList = orderItemsRepository.findAllByOrderId(orderId);
        List<OrderItemDto> orderItemDtoList = new ArrayList<OrderItemDto>();
        for(OrderItem item : orderItemList){
            OrderItemDto orderItemDto = new OrderItemDto();
            orderItemDto.setId(item.getId());
            orderItemDto.setQuantidade(item.getQuantidade());
            orderItemDto.setPreco(item.getPreco());
            orderItemDto.setPedidoId(item.getOrder().getId());
            orderItemDto.setEmpresaId(item.getCompany().getId());
            orderItemDto.setProduct(item.getProduct());
            orderItemDto.setStatusPedidoItem(item.getStatus());

            orderItemDtoList.add(orderItemDto);
        }

      return orderItemDtoList;
    }

    public void updateOrderStatus(Integer orderId, StatusPedido status){
        //Caso todos os itens do pedido possuam o mesmo status o pedido receberá esse status
        List<OrderItem> orderItemList = orderItemsRepository.findAllByOrderId(orderId);
        List<StatusPedido> statusPedidoList = new ArrayList<>();
        for(OrderItem item: orderItemList){
            statusPedidoList.add(item.getStatus());
        }

        if(statusPedidoList.stream().distinct().count() <= 1){
            Order order = orderRepository.findById(orderId).get();
            order.setStatus(status);
            orderRepository.save(order);
        }
    }

    public void updateOrderItemStatus(Integer orderItemId) {
        Optional<OrderItem> orderItem = orderItemsRepository.findById(orderItemId);

        if(orderItem.isPresent()) {
            StatusPedido status = orderItem.get().getStatus();
            if (status == StatusPedido.EMITIDO) {
                orderItem.get().setStatus(StatusPedido.TRANSITO);
                orderItemsRepository.save(orderItem.get());
                updateOrderStatus(orderItem.get().getOrder().getId(), StatusPedido.TRANSITO);
            } else if (status == StatusPedido.TRANSITO) {
                orderItem.get().setStatus(StatusPedido.CONCLUIDO);
                orderItemsRepository.save(orderItem.get());
                updateOrderStatus(orderItem.get().getOrder().getId(), StatusPedido.CONCLUIDO);
            } else {
                updateOrderStatus(orderItem.get().getOrder().getId(), StatusPedido.CONCLUIDO);
                throw new CustomException("Item de pedido com status CONCLUÍDO");
            }

        }else{
            throw new CustomException("Item de pedido com id " + orderItemId + " não existe");
        }
    }
}
