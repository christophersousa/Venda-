import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api_product from "../../api/api_product";
import { AlertMessage } from "../../components/AlertMessage";
import { CardCart } from "../../components/CardCart";
import { CardPedidos } from "../../components/CardPedidos";
import { CardPedidosFeitos } from "../../components/CardPedidosFeitos";
import { Context } from "../../Context/AuthContext";
import { useCart } from "../../hooks/useCart";
import { usePurchase } from "../../hooks/usePurchase";
import useToggle from "../../hooks/useToggle";
import { PropsCart } from "../../interfaces/Carrinho";
import { PropsOrderItem, PropsPedidos } from "../../interfaces/Pedidos";

export function Pedidos(){
    const [produtoCarrinho, setProdutoCarrinho] = useState<PropsOrderItem[]>();

    const {updatePurchases} = usePurchase()
    const { show, showAlert } = useToggle();

    const { use } = useContext(Context);

    const updatePurch = (id:number) => {
        updatePurchases(id)
        showAlert()
    }


    useEffect(() => {
      api_product.get(`/pedido/getOrdersByCompany?token=${use?.token}`,
      )
      .then(response => response.data)
      .then(data => {
        setProdutoCarrinho(data)
      })
    }, [updatePurch])


    return (
        <div>
            <div className="absolute right-2 top-8 z-10">
                    {show&&<AlertMessage
                            showAlert={showAlert}
                            show={show}
                            message={"Pedido Enviado"}
                            color="green"
                          />}

                      </div>
            <div className="container mx-auto mt-10">

                <div className="flex shadow-md my-10">

                    <div className=" bg-white px-10 py-10">

                        <div className="flex justify-between border-b mt-2 pb-8">
                            <h1 className="font-semibold text-2xl">Pedidos</h1>
                            <h2 className="font-semibold text-2xl">{produtoCarrinho?.length} Itens</h2>
                        </div>
                        <div className="flex mt-10 mb-5">
                            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                            Detalhe do produto
                            </h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                            Quantidade
                            </h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                            Preço
                            </h3>
                            <h3 className="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">
                            Status de envio
                            </h3>
                        </div>

                        {produtoCarrinho?.map((response, key) => {
                            return <><CardPedidosFeitos
                            key={response.id}
                            id={response.id}
                            quantidade={response.quantidade}
                            product={response.product}
                            statusPedidoItem={response.statusPedidoItem}
                            preco={response.preco}
                            pedidoId={response.pedidoId}
                            empresaId={response.empresaId}
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