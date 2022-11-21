import { useContext, useState } from "react";
import api_product from "../api/api_product";
import { Context } from "../Context/AuthContext";
import { PropsPhotos, PropsProduct, PropsProductRegister } from "../interfaces/Product";



export default function useProduct() {
  const {use} = useContext(Context)
  const [product, setProduct] = useState<PropsProduct>();

  function handleProduct(product: PropsProduct) {
    setProduct(product);
  }

  function createProduct(product: PropsProductRegister){
    console.log("Produto cadastrado : " + Number(product.tipoId));
      api_product.post(`/produto/create?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/jsoWn',
            'Access-Control-Allow-Origin': true,
        },
        descricao: JSON.stringify(product.descricao),
        nome: product.nome,
        preco: product.preco,
        precoAnterior: product.precoAnterior,
        marca: product.marca,
        tipoId: Number(product.tipoId),
    }).then((response) => {

        console.log("sucesso", response);
        uplodFotos(product.fotos,response.data.idProduct)

    }).catch((error) => {
        console.log("erro: " + error);
        return error.message
    });

  }

  function uplodFotos(Photo: File, id: number){

    console.log("Foto = ", Photo)

    const body = new FormData()
    body.append('photo', Photo)

    api_product.post(`/produto/${id}/uploadPhoto`,body,{
      headers: {
          'Content-Type': 'multipart/form-data, boundary=${formData._boundary}',
          'Access-Control-Allow-Origin': true,
      },
  }).then((response) => {
      console.log("sucesso", response);
      window.location.href="/meusProdutos"

  }).catch((error) => {
      console.log("erro: " + error);
      return error.message
  });

  }
  return { handleProduct, product, createProduct };
}
