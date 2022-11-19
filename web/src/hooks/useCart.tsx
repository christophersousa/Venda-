import { useState } from "react";
interface PropsProduct {
  title: string;
  link: string;
  imageUrl: string;
  images2: string;
  valor_anterior: number;
  valor: number;
  descricao: string;
  ficha: Ficha;
}

interface Ficha {
  codigo: string;
  codigo_barras: string;
  Garantia: string;
}

export function useCart() {
  const [cart, setCart] = useState<PropsProduct[]>([]);

  function handleCart(data: PropsProduct) {
    cart.push(data);
  }

  function handleRemoveCart(data: PropsProduct) {
    const newList = cart.filter((item) => item !== data);

    setCart(newList);
  }

  function formatMoney(amount: number){
    return amount.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  return { cart, handleCart,handleRemoveCart, formatMoney };
}
