import { useContext, useState } from "react";
import api_product from "../api/api_product";
import { Context } from "../Context/AuthContext";

export function usePurchase(){
    const[statusCompra, setStatusCompra] = useState("")
    const {use} = useContext(Context)

    function purchase(){
        api_product.post(`/pedido/create?token=${use?.token}`,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': true,
            },
        }).then((response) => {
            console.log("sucesso", response);
            setStatusCompra("Compra realizada com sucesso")
            return response.data
        }).catch((error) => {
            console.log("erro endereço: " + error);
            setStatusCompra("Ocorreu um erro")
            return error.message
        });
        return statusCompra
    }

    function updatePurchases(id:number){
        api_product.post(`/pedido/updateStatus/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': true,
            },
        }).then((response) => {
            console.log("sucesso", response);
            setStatusCompra("Compra realizada com sucesso")
            return response.data
        }).catch((error) => {
            console.log("erro endereço: " + error);
            setStatusCompra("Ocorreu um erro")
            return error.message
        });
    }

    return{purchase, updatePurchases}
}