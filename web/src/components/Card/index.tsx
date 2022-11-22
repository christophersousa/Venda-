import { useEffect, useState } from "react";
import api from "../../api/api_product";
import { useCart } from "../../hooks/useCart";

interface ProxyCard{
    name: string;
    id: number;
    valor_anterior: number;
    valor: number;
}


function byteToBlob(photo: string){
    const imageBytes = photo;
    let blob = new Blob([imageBytes], { type: "image/jpeg" });
    let imageUrl = URL.createObjectURL(blob);
    return imageUrl
}


export function Card({ name, id, valor_anterior, valor}:ProxyCard){
    const [foto, setFoto] = useState<string>();

    useEffect(() => {
      api.get(`/produto/${id}/downloadPhoto`,
          { responseType: 'arraybuffer' })
            .then(response => response.data)
            .then(data => {
              const imageUrl = byteToBlob(data);
              setFoto(imageUrl);
            })


  }, [])

    const {formatMoney} = useCart()
    return(
        <a href="#" className="flex justify-center h-[28rem] ">
            <div className="rounded-lg shadow-lg bg-white max-w-sm flex flex-col justify-between py-6 px-4 w-[20rem]">
                <div className=" flex h-[80%] justify-center mt-3">
                    <img className="rounded-t-lg max-h-[15rem]" src={foto} alt=""/>
                </div>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xs font-medium mb-2">{name}</h5>
                    <p className="text-color-gray-text text-xs mt-4 line-through">
                        {valor_anterior === 0 ? '' : formatMoney(valor_anterior)}
                    </p>
                    <h1 className="font-bold text-lg">{formatMoney(valor)}</h1>
                </div>
            </div>
        </a>
    )
}