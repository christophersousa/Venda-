import { useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";
import api_product from "../api/api_product";
import { Context } from "../Context/AuthContext";

interface Ficha {
  codigo: string;
  codigo_barras: string;
  Garantia: string;
}

interface PropsProduct {
  nome: string;
  link: string;
  imageUrl: string;
  images2: string;
  valor_anterior: number;
  preco: number;
  descricao: string;
  categoriaId: string;
  ficha: Ficha;
}

interface Categorias{
  id: number;
  nome: string;
}

export default function useProduct() {

  const {use} = useContext(Context)

  const [product, setProduct] = useState<PropsProduct>();
  const [categoria, setCategoria] = useState<Categorias[]>([])

  useEffect(()=>{
    listCategorias()
  },[])

  async function listCategorias(){
    api_product.get(`/categoria/list`)
               .then(response => response.data)
               .then(data => categoria.push(...data))
               .catch(err => console.log("categorias r",err))

  }

  function handleProduct(product: PropsProduct) {
    console.log(product);
    setProduct(product);
  }

  function createProduct(product: PropsProduct){
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

  return { handleProduct, product,categoria, createProduct };
}
