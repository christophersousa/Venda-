import { useContext, useState } from "react";
import api_product from "../api/api_product";
import { Context } from "../Context/AuthContext";

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
  fotos: string[];
}

interface PropsProductRegister {
  nome: string;
  preco: number;
  descricao: string;
  categoriaId: string;
}

export default function useProduct() {
  const {use} = useContext(Context)
  const [product, setProduct] = useState<PropsProduct>();

  function handleProduct(product: PropsProduct) {
    setProduct(product);
  }

  function createProduct(product: PropsProductRegister){
    console.log("produto cadastrado ",product);
      api_product.post(`/produto/create?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/jsoWn',
            'Access-Control-Allow-Origin': true,
        },
        categoriaId: product.categoriaId,
        descricao: JSON.stringify(product.descricao),
        nome: product.nome,
        preco: product.preco,
    }).then((response) => {
        console.log("sucesso", response);


    }).catch((error) => {
        console.log("erro: " + error);
        return error.message
    });

  }
  return { handleProduct, product, createProduct };
}
