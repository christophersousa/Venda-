import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api_product";
import { Context } from "../../Context/AuthContext";
import { useCart } from "../../hooks/useCart";
import { useMask } from "../../hooks/useMask";

function byteToBlob(photo: string){
    const imageBytes = photo;
    let blob = new Blob([imageBytes], { type: "image/jpeg" });
    let imageUrl = URL.createObjectURL(blob);
    return imageUrl
}

export interface PropsOrderItem {
  id: number,
  quantidade: number,
  preco: number,
  pedidoId: number,
  empresaId: number,
  product: {
    id: number,
    nome: string,
    precoAnterior: number,
    preco: number,
    marca: string,
    estoque: number,
    type: {
      id: number,
      nome: string
    }
  },
  statusPedidoItem: string,
  updatePurchase: (id: number)=>void,
}


export function CardPedidosFeitos({id, quantidade, product, statusPedidoItem, preco, pedidoId, updatePurchase}:PropsOrderItem){
    const [foto, setFoto] = useState<string>();

    function getPhotos(){
      api.get(`/produto/${product.id}/downloadPhoto`,
        { responseType: 'arraybuffer' })
          .then(response => response.data)
          .then(data => {
            const imageUrl = byteToBlob(data);
            setFoto(imageUrl);
          })
    }

    useEffect(() => {
      getPhotos()
    }, [])


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
                {product.nome}
              </span>
              <span className="text-red-500 text-xs"></span>
            </div>
          </div>

          <span className="text-center w-1/5 font-semibold text-sm">{quantidade}</span>
          <span className="text-center w-1/5 font-semibold text-sm">
            {formatMoney(product.preco)}
          </span>
          {
            statusPedidoItem === "EMITIDO" ?
            <button
              onClick={() => updatePurchase(id)}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
              Enviar
            </button>
            :
            <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              {statusPedidoItem}
            </button>
          }

        </div>
      )
}