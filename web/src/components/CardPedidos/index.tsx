import { useContext, useEffect, useState } from "react";
import api from "../../api/api_product";
import { Context } from "../../Context/AuthContext";
import { useCart } from "../../hooks/useCart";
import { useMask } from "../../hooks/useMask";
import { PropsOrderItem, PropsPedidos } from "../../interfaces/Pedidos";

function byteToBlob(photo: string){
    const imageBytes = photo;
    let blob = new Blob([imageBytes], { type: "image/jpeg" });
    let imageUrl = URL.createObjectURL(blob);
    return imageUrl
}

interface PropsProduct {
  id: number;
  id_produto: number;
  nome: string;
  marca: string;
  preco: number;
  quantidade: number;
}

interface PropsCartItem {
  id: number,
  product: {
    descricao: string;
    estoque: number;
    id: number;
    marca: string;
    nome: string;
    preco: number;
    precoAnterior: number;
  },
  type: {
    id: number;
    nome: string;
  },
  quantidade: number,
  valorTotalItens: number
}

interface PropsPedidosInt{
  id: number;
  data: string;
  valorTotalItem: number;
  updatePurchase: (id: number)=>void,
}


export function CardPedidos({id, valorTotalItem, data, updatePurchase}:PropsPedidosInt){
    const {use} = useContext(Context)
    const [foto, setFoto] = useState<string>();
    const [itemCarrinho, setItemCarrinho] = useState<PropsOrderItem[]>([]);

    const getData = () =>{
      api.get(`/pedido/getOrderItens/${id}`)
      .then(response => response.data)
      .then(data => {
        console.log(data);
        setItemCarrinho(data);
      })
    }

    function getPhotos(){
      api.get(`/produto/${itemCarrinho[0]?.product.id}/downloadPhoto`,
        { responseType: 'arraybuffer' })
          .then(response => response.data)
          .then(data => {
            const imageUrl = byteToBlob(data);
            setFoto(imageUrl);
          })
    }

    useEffect(() => {
        getData()
    }, [])


    useEffect(() => {
      getPhotos()
    }, [itemCarrinho])


    const {formatMoney, handleRemoveCart} = useCart()
    return (
        <div
          className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5 gap-5"
        >
          <div className="flex w-2/5">
          <div className="flex items-center">
              <img
                src={foto}
                alt=""
                className=" w-[28rem]"
              />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="font-bold text-sm">
                {itemCarrinho[0]?.product.nome}
              </span>
              <span className="text-red-500 text-xs"></span>
            </div>
          </div>

          <span className="text-center w-1/5 font-semibold text-sm">{data}</span>
          <span className="text-center w-1/5 font-semibold text-sm">
            {formatMoney(valorTotalItem)}
          </span>
          <span className="text-center w-1/5 font-semibold text-sm">
            {itemCarrinho[0]?.statusPedidoItem}
          </span>

          {
            itemCarrinho[0]?.statusPedidoItem === "TRANSITO" ?
            <button
              onClick={() => updatePurchase(itemCarrinho[0].id)}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Recebido
            </button>
            :
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              {itemCarrinho[0]?.statusPedidoItem}
            </button>
          }
        </div>
      )
}