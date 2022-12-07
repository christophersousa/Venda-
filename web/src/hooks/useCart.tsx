import { useContext, useState } from "react";
import { PropsProduct } from "../interfaces/Product";
import api_product from "../api/api_product";
import { Context } from "../Context/AuthContext";


export function useCart() {
  const [cart, setCart] = useState<PropsProduct[]>([]);
  const {use} = useContext(Context)

  function handleCart(data: PropsProduct) {
    console.log(data.id, use?.token)
    api_product.post(`/carrinho/add?token=${use?.token}`,{
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true,
      },
      produtoId: data.id,
      quantidade: 1
  }).then((response) => {

      console.log("sucesso", response);

  }).catch((error) => {
      console.log("erro: " + error);
      return error.message
  });
  }

  function handleRemoveCart(itemId: number) {
    api_product.delete(`/carrinho/delete/${itemId}?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
        },
    }).then((response) => {

        console.log("sucesso", response);
        window.location.href = "/carrinho"
    }).catch((error) => {
        console.log("erro: " + error);
        return error.message
    });
  }

  function handleUpdateCart(itemId: number){
      api_product.post(`/carrinho/update/${itemId}?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
        },
    }).then((response) => {

        console.log("sucesso", response);
        window.location.href = "/carrinho"
    }).catch((error) => {
        console.log("erro: " + error);
        return error.message
    });
  }

  function formatMoney(amount: number){
    return amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  return { cart, handleCart, formatMoney, handleRemoveCart, handleUpdateCart };
}
