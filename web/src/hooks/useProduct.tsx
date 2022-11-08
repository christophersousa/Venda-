import { useState } from "react";

interface Ficha {
  codigo: string;
  codigo_barras: string;
  Garantia: string;
}

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

export default function useProduct() {
  const [product, setProduct] = useState<PropsProduct>();

  function handleProduct(product: PropsProduct) {
    console.log(product);
    setProduct(product);
  }

  return { handleProduct, product };
}
