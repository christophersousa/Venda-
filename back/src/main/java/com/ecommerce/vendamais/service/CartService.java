package com.ecommerce.vendamais.service;

import com.ecommerce.vendamais.dto.cart.AddToCartDto;
import com.ecommerce.vendamais.dto.cart.CartDto;
import com.ecommerce.vendamais.dto.cart.CartItemDto;
import com.ecommerce.vendamais.exceptions.CustomException;
import com.ecommerce.vendamais.model.Cart;
import com.ecommerce.vendamais.model.Product;
import com.ecommerce.vendamais.model.User;
import com.ecommerce.vendamais.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CartService {
    @Autowired
    private ProductService productService;
    @Autowired
    private CartRepository cartRepository;

    public void addToCart(AddToCartDto addToCartDto, User user) {
        Product produto = productService.getProductById(addToCartDto.getProdutoId());

        if(addToCartDto.getQuantidade() < 1){
            throw new CustomException("Quantidade de produtos deve ser maior que 0");
        }

        Cart cart = new Cart();
        cart.setProduto(produto);
        cart.setUsuario(user);
        cart.setQuantidade(addToCartDto.getQuantidade());

        cartRepository.save(cart);
    }

    public CartDto listCardItems(User user) {
        List<Cart> cartList = cartRepository.findAllByUsuario(user);
        List<CartItemDto> cartItems = new ArrayList<>();
        double totalCost = 0;
        for(Cart cart : cartList){
            CartItemDto cartItemDto = new CartItemDto(cart);
            cartItems.add(cartItemDto);
            totalCost += cartItemDto.getQuantidade() * cartItemDto.getProduto().getPreco();
        }
        CartDto cartDto = new CartDto();
        cartDto.setValorTotal(totalCost);
        cartDto.setCartItems(cartItems);
        return cartDto;
    }

    public void deleteCartItem(Integer cartItemId, User user) {
        Optional<Cart> optionalCart = cartRepository.findById(cartItemId);

        if(optionalCart.isEmpty()){
            throw  new CustomException("id do produto é inválido: " + cartItemId);
        }

        Cart cart = optionalCart.get();

        if(cart.getUsuario() != user){
            throw new CustomException("item do carrinho não pertence ao usuário");
        }

        cartRepository.delete(cart);
    }
}
