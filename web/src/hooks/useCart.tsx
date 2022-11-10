import { useState } from "react";
interface PropsProduct {
  title: string;
  link: string;
  imageUrl: string;
  images2: string;
  valor_anterior: string;
  valor: string;
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

  return { cart, handleCart };
}
