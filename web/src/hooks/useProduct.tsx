import { useState } from "react";

interface Ficha {
  codigo: string;
  codigo_barras: string;
  Garantia: string;
}

interface PropsProduct {
  id: number
  nome: string;
  descricao: string;
  precoAnterior: number;
  preco: number;
  marca: string;
  foto: string;
}

export default function useProduct() {
  const [product, setProduct] = useState<PropsProduct>();

  function handleProduct(product: PropsProduct) {
    setProduct(product);
  }

  return { handleProduct, product };
}
