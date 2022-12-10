package com.ecommerce.vendamais.controller;

import com.ecommerce.vendamais.common.ApiResponse;
import com.ecommerce.vendamais.dto.cart.AddToCartDto;
import com.ecommerce.vendamais.dto.cart.CartDto;
import com.ecommerce.vendamais.dto.order.OrderDto;
import com.ecommerce.vendamais.dto.order.OrderItemDto;
import com.ecommerce.vendamais.model.Order;
import com.ecommerce.vendamais.model.OrderItem;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.service.AuthenticationService;
import com.ecommerce.vendamais.service.CartService;
import com.ecommerce.vendamais.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pedido")
public class OrderController {
    @Autowired
    private OrderService orderService;
    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/create")
    public ResponseEntity<ApiResponse> createOrder(@RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);

        orderService.createOrder(user);

        return new ResponseEntity<>(new ApiResponse(true, "pedido criado com sucesso"), HttpStatus.CREATED);
    }

    @GetMapping("/getOrdersByUser")
    public ResponseEntity<List<Order>> getOrdersByUser(@RequestParam("token") String token){
        authenticationService.authenticateUser(token);

        User user = authenticationService.getUser(token);

        List<Order> allOrders = orderService.getOrdersByUser(user);

        return new ResponseEntity<>(allOrders, HttpStatus.OK);
    }

    @GetMapping("/getOrderItens/{orderId}")
    public ResponseEntity<List<OrderItemDto>> getOrderItens(@PathVariable("orderId") int orderId){
        List<OrderItemDto> allItens = orderService.getOrderItens(orderId);

        return new ResponseEntity<>(allItens, HttpStatus.OK);
    }

    @PostMapping("updateStatus/{orderItemId}")
    public ResponseEntity<ApiResponse> updateOrderItemStatus(@PathVariable("orderItemId") Integer orderItemId){

        orderService.updateOrderItemStatus(orderItemId);

        return new ResponseEntity<>(new ApiResponse(true, "status de item de pedido atualizado com sucesso"), HttpStatus.OK);
    }

}
