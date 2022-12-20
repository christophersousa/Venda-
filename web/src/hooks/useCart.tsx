import { useContext, useState } from "react";
import { PropsProduct } from "../interfaces/Product";
import api_product from "../api/api_product";
import { Context } from "../Context/AuthContext";

interface props{
    id: number,
    cep: string,
    uf: string,
    cidade: string,
    bairro: string,
    logradouro: string,
    numero: number,
    complemento: string
}

export function useCart() {
  const [cart, setCart] = useState<PropsProduct[]>([]);
  const [adress, setAdress] = useState<props>();
  const [resultCreateAdress, setResultCreateAdress] = useState<string>('');
  const {use} = useContext(Context)

  function handleCart(data: PropsProduct) {
    console.log(data.id, use?.token)
    api_product.post(`/carrinho/add?token=${use?.token}`,{
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true,
      },
      produtoId: data.id,
      quantidade: 1
  }).then((response) => {

      console.log("sucesso", response);

  }).catch((error) => {
      console.log("erro: " + error);
      return error.message
  });
  }

  function handleRemoveCart(itemId: number) {
    api_product.delete(`/carrinho/delete/${itemId}?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
        },
    }).then((response) => {

        console.log("sucesso", response);
    }).catch((error) => {
        console.log("erro: " + error);
        return error.message
    });
  }

  function handleUpdateCart(itemId: number){
      api_product.post(`/carrinho/increment/${itemId}?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
        },
    }).then((response) => {

        console.log("sucesso", response);
        api_product.get(`/carrinho/cartItem/${itemId}`)
        .then(response => response.data)
        .then(data => {
          return data;
        })

    }).catch((error) => {
        console.log("erro: " + error);
        return error.message
    });
  }

  function handleDecrementCart(itemId: number){
    api_product.post(`/carrinho/decrement/${itemId}?token=${use?.token}`,{
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true,
      },
  }).then((response) => {

      console.log("sucesso", response);

  }).catch((error) => {
      console.log("erro: " + error);
      return error.message
  });
}

  function formatMoney(amount: number | undefined){
    return amount?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  function getAdrress(){
    let data = ''
    api_product.get(`/endereco/{userId}?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
        },
    }).then((response) => {
        console.log("sucesso", response);
        setAdress(data = response.data)
        return response.data
    }).catch((error) => {
        console.log("erro endereço: " + error);
        return error.message
    });
    return adress;
  }

  async function updateAdress(data:props){
    api_product.post(`/endereco/create?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
        },
        id : data.id,
        bairro: data.bairro,
        cep: data.cep,
        cidade: data.cidade,
        complemento: data.complemento,
        logradouro: data.logradouro,
        numero: data.numero,
        uf: data.uf
    }).then(async (response) => {

        console.log("sucesso", response);
        await setResultCreateAdress("Novo endereço cadastrado")
    }).catch(async (error) => {
        console.log("erro: " + error);
        await setResultCreateAdress("Ocorreu um erro!!")
    });
    return await resultCreateAdress;
  }

  return { cart, handleCart, formatMoney, handleRemoveCart, handleUpdateCart,getAdrress, handleDecrementCart, updateAdress, resultCreateAdress };
}
