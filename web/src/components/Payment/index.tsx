import { useEffect, useState } from "react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { useCart } from "../../hooks/useCart";
import { AlertMessage } from "../AlertMessage";
import "./style.css"

interface props{
    showPayment: () => void;
    totalValor: number;
    purchase: () => void;
    show: boolean,
    showAlert: () => void,
}

export function Payment({showPayment, totalValor, purchase, show, showAlert}:props){
    const [message, setMessage] = useState<string>()
    const {formatMoney} = useCart()

    useEffect(() =>{
        const m = totalValor > 0 ? "Compra realizada com sucesso" : "Ocorreu um erro"
        setMessage(m)
    },[])

    function confirmPurchase(){
        purchase()
        showAlert()
    }

    return (
        <div className="static">

        <div
          className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"
        ></div>
        <div className="fixed top-0 right-0 left-0 z-20 h-full flex justify-center items-center ">

          <div className="mx-4 my-4 bg-white">
            <div className="absolute right-5 top-8 z-10">
                        <AlertMessage
                            showAlert={showAlert}
                            show={show}
                            message={message || ''}
                            color="red"
                        />
                </div>
              <div className="flex justify-end">
                  <button
                      className=" text-red-900 px-2 m-2"
                      onClick={() => showPayment()}
                  >
                      X
                  </button>
              </div>

              <div className="relative">

                <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-14 text-gray-700 max-w-[600px]">

                        <div className="w-full pt-1 pb-5">
                            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                                <BsFillCreditCard2BackFill width={20}/>
                            </div>
                        </div>
                        <div className="mb-10">
                            <h1 className="text-center font-bold text-xl uppercase">Informações de pagamento seguras</h1>
                        </div>

                        <div className="mb-10 flex justify-between">
                            <h1 className=" font-bold">Valor total da compra:</h1>
                            <span>{formatMoney(totalValor)}</span>
                        </div>

                        <div className="mb-3 flex -mx-2">
                            <div className="px-2">
                                <label htmlFor="type1" className="flex items-center cursor-pointer">
                                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3"/>
                                </label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="font-bold text-sm mb-2 ml-1">Nome do titular</label>
                            <div>
                                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="font-bold text-sm mb-2 ml-1">Numero do cartão</label>
                            <div>
                                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
                            </div>
                        </div>
                        <div className="mb-3 -mx-2 flex items-end">
                            <div className="px-2 w-1/2">
                                <label className="font-bold text-sm mb-2 ml-1">Data expiração</label>
                                <div>
                                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                        <option value="01">01 - Janeiro</option>
                                        <option value="02">02 - Fervereiro</option>
                                        <option value="03">03 - Março</option>
                                        <option value="04">04 - Abril</option>
                                        <option value="05">05 - Maio</option>
                                        <option value="06">06 - Junho</option>
                                        <option value="07">07 - Julho</option>
                                        <option value="08">08 - Agosto</option>
                                        <option value="09">09 - Setembro</option>
                                        <option value="10">10 - Outubro</option>
                                        <option value="11">11 - Novembro</option>
                                        <option value="12">12 - Dezembro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="px-2 w-1/2">
                                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                                    <option value="2035">2035</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-10">
                            <label className="font-bold text-sm mb-2 ml-1">Codigo de segurança</label>
                            <div>
                                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
                            </div>
                        </div>
                        <div>
                            <button
                            onClick={()=>{confirmPurchase()}}
                            className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                                <i className="mdi mdi-lock-outline mr-1">
                                    </i>
                            Confirmar Compra</button>
                        </div>
                    </div>
                    </div>

                </div>

          </div>
      </div>


    )
}