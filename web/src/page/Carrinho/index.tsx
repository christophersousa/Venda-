import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api_product from "../../api/api_product";
import { CardCart } from "../../components/CardCart";
import { ModalAdress } from "../../components/ModalAdress";
import { Context } from "../../Context/AuthContext";
import { useCart } from "../../hooks/useCart";
import useToggle from "../../hooks/useToggle";
import { PropsCart } from "../../interfaces/Carrinho";

const envio = {
  "Standard shipping": 10,
  "correios": 15,
  "express": 40,
}
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



export function Carrinho() {
  const [metodoEnvio, setMetodoEnvio] = useState<number>(envio["Standard shipping"])
  const [produtoCarrinho, setProdutoCarrinho] = useState<PropsCart>();


  const selectValue = useRef<HTMLSelectElement>(null)

  const { use } = useContext(Context);
  const {formatMoney, handleRemoveCart, getAdrress} = useCart()
  const { on, toggler } = useToggle(); // just added
  const [adress, setAdress] = useState<props>();


  function handleRemoveCart(itemId: number) {
    api_product.delete(`/carrinho/delete/${itemId}?token=${use?.token}`,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
        },
    }).then((response) => {

        console.log("sucesso", response);
        api_product.get(`/carrinho/?token=${use?.token}`,
        )
        .then(response => response.data)
        .then(data => {
          setProdutoCarrinho(data)
        })
    }).catch((error) => {
        console.log("erro: " + error);
        return error.message
    });
  }


  useEffect(() => {
    api_product.get(`/carrinho/?token=${use?.token}`,
    )
    .then(response => response.data)
    .then(data => {
      setProdutoCarrinho(data)
    })
  }, [])

  useEffect(() => {
    setAdress(getAdrress())
  }, adress)

  return (
    <div>
      {on && <ModalAdress
            toggler={toggler}
            bairro= {adress?.bairro}
            cep= {adress?.cep}
            logradouro={adress?.logradouro}
            numero= {adress?.numero}
            cidade= {adress?.cidade}
            uf={adress?.uf}
            />}
      <div className="container mx-auto mt-10">

        <div className="flex shadow-md my-10">

          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex flex-col border-b mt-2 pb-8">
              <h1 className="font-semibold text-2xl">Endereço</h1>
              <div className="flex justify-between border-b mt-2 pb-8 px-4 items-center">
                <div>
                  {adress?.bairro}<br/>
                  {adress?.cep}<br/>
                  {adress?.logradouro}/N°{adress?.numero}<br/>
                  {adress?.cidade}/{adress?.uf}
                </div>
                <p
                onClick={() => toggler()}
                className=" cursor-pointer text-blue-500"
                >
                  Alterar
                </p>

              </div>
            </div>
            <div className="flex flex-col border-b mt-2 pb-8">
              <h1 className="font-semibold text-2xl">Método de pagamento</h1>
              <div>
                pix
              </div>
            </div>
            <div className="flex justify-between border-b mt-2 pb-8">
              <h1 className="font-semibold text-2xl">Carrinho</h1>
              <h2 className="font-semibold text-2xl">{produtoCarrinho?.cartItems.length} Itens</h2>
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
                Total
              </h3>
            </div>

            {produtoCarrinho?.cartItems.map((response, key) => {
              return <><CardCart
                key={response.id}
                id={response.id}
                id_produto={response.produto.id}
                nome={response.produto.nome}
                marca={response.produto.marca}
                preco={response.produto.preco}
                quantidade={response.quantidade} />
                <a
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                  onClick={() => handleRemoveCart(response.id)}
                >
                  Remover
                </a></>
            })}

              

            <Link
              to="/"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Resumo do pedido
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Itens {produtoCarrinho?.cartItems.length}</span>
              <span className="font-semibold text-sm">{formatMoney(Number(produtoCarrinho?.valorTotal))}</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Envio
              </label>
              <select ref={selectValue} className="block p-2 text-gray-600 w-full text-sm" onChange={()=>{setMetodoEnvio(Number(selectValue.current?.value));}}>
                <option value={envio["Standard shipping"]}>Standard shipping - {formatMoney(envio["Standard shipping"])}</option>
                <option value={envio["correios"]}>Correios - {formatMoney(envio["correios"])}</option>
                <option  value={envio["express"]}>Express - {formatMoney(envio["express"])}</option>

              </select>
            </div>

            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Custo total</span>
                <span>{formatMoney(Number(produtoCarrinho?.valorTotal))}</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
