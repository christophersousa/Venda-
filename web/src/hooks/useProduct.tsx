import { useState } from "react";

interface Ficha {
  codigo: string;
  codigo_barras: string;
  Garantia: string;
}

interface PropsProduct {
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
    console.log(product);
    setProduct(product);
  }

  return { handleProduct, product };
}
