import { useState } from "react";
import { PropsProduct } from "../interfaces/Product";


export function useCart() {
  const [cart, setCart] = useState<PropsProduct[]>([]);

  function handleCart(data: PropsProduct, fotos:string[]) {
    data.fotos = fotos;
    cart.push(data);
  }

  function handleRemoveCart(data: PropsProduct) {
    const newList = cart.filter((item) => item !== data);

    setCart(newList);
  }

  function formatMoney(amount: number){
    return amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  return { cart, handleCart, formatMoney, handleRemoveCart };
}
