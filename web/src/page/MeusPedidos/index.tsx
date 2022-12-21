import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api_product from "../../api/api_product";
import { AlertMessage } from "../../components/AlertMessage";
import { CardCart } from "../../components/CardCart";
import { CardPedidos } from "../../components/CardPedidos";
import { Context } from "../../Context/AuthContext";
import { useCart } from "../../hooks/useCart";
import { usePurchase } from "../../hooks/usePurchase";
import useToggle from "../../hooks/useToggle";
import { PropsCart } from "../../interfaces/Carrinho";
import { PropsPedidos } from "../../interfaces/Pedidos";

export function MeusPedidos(){
    const [produtoCarrinho, setProdutoCarrinho] = useState<PropsPedidos[]>();



    const { use } = useContext(Context);
    const { show, showAlert } = useToggle();
    const {updatePurchases} = usePurchase()

    const updatePurch = (id:number) => {
        console.log(id)
        updatePurchases(id)
        showAlert()
    }

    useEffect(() => {
      api_product.get(`/pedido/getOrdersByUser?token=${use?.token}`,
      )
      .then(response => response.data)
      .then(data => {
        setProdutoCarrinho(data)
      })
    }, [produtoCarrinho])


    return (
        <div>
            <div className="absolute right-2 top-8 z-10">
                    {show&&<AlertMessage
                            showAlert={showAlert}
                            show={show}
                            message={"Pedido Recebido"}
                            color="green"
                          />}

                      </div>
            <div className="container mx-auto mt-10">

                <div className="flex shadow-md my-10">

                    <div className=" bg-white px-10 py-10">

                        <div className="flex justify-between border-b mt-2 pb-8">
                            <h1 className="font-semibold text-2xl">Meus pedidos</h1>
                            <h2 className="font-semibold text-2xl">{produtoCarrinho?.length} Itens</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                            Detalhe do produto
                            </h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                            Data
                            </h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                            Preço
                            </h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                            Status de envio
                            </h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                            Confirmação
                            </h3>
                        </div>

                        {produtoCarrinho?.map((response, key) => {
                            return <><CardPedidos
                            key={response.id}
                            id={response.id}
                            valorTotalItem={response.valorTotal}
                            data={response.createdDate}
                            updatePurchase={updatePurch}
                            />
                            </>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}