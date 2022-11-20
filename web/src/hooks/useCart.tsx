import { useState } from "react";
interface PropsProduct {
  id: number;
  nome: string;
  descricao: string;
  precoAnterior: number;
  preco: number;
  marca: string;
  fotos: string[];
}

interface Ficha {
  codigo: string;
  codigo_barras: string;
  Garantia: string;
}

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
