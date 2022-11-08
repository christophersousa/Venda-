import { Input, Select, Option, Button } from "@material-tailwind/react";
import { BsCalendar3, BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";

export function MeusProdutos() {
  return (
    <div>
      <div className=" bg-white m-margin-container w-full p-padding-container">
        25/100
        <div className="w-full bg-gray-200 rounded-full">
          <div
            className=" bg-background-orange text-xs font-medium text-white text-center p-0.5 leading-none rounded-l-full"
            style={{ width: "25%" }}
          >
            {" "}
            25%
          </div>
        </div>
      </div>

      <div className=" flex gap-12 bg-white m-margin-container w-full p-padding-container">
        <div className="flex justify-center items-center gap-6 bg-white shadow-lg border-l-4 border-l-blue-600 bor border w-72 p-4 rounded-sm">
          <div>
            <h4 className=" font-bold text-blue-600">Ganhos (Semanal)</h4>
            <span className=" font-bold">5,000 R$</span>
          </div>
          <BsCurrencyDollar size={40} color="EFEFEF" />
        </div>
        <div className="flex justify-center items-center gap-6 bg-white shadow-lg border-l-4 border-l-light-green-600 bor border w-72 p-4 rounded-sm">
          <div>
            <h4 className=" font-bold text-light-green-600">Ganhos (Mensal)</h4>
            <span className=" font-bold">10,000 R$</span>
          </div>
          <BsCalendar3 size={40} color="EFEFEF" />
        </div>
      </div>

      <div className=" flex gap-12 bg-white m-margin-container w-full p-padding-container">
        <div className="w-72">
          <Input label="Nome do produto" />
        </div>
        <div className="w-72">
          <Input label="Código do produto" />
        </div>

        <div className="w-72">
          <Select label="Categorias">
            <Option>Smartphones</Option>
            <Option>Computadores</Option>
          </Select>
        </div>

        <button
          type="submit"
          className=" font-bold w-48 justify-center ml-auto inline-flex items-center py-2.5 px-3 text-sm text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg"
        >
          <svg
            aria-hidden="true"
            className="mr-2 -ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Filtrar
        </button>
      </div>

            <div className=" bg-white p-padding-container py-16">
                <div className="flex p-2 items-center">
                    <h2 className="font-bold text-xl">Meus produtos</h2>
                    <Link to="/cadastrarprodutos" className=" font-bold w-48 justify-center ml-auto inline-flex items-center py-2.5 px-3 text-sm text-white bg-background-orange border border-orange-900 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-600 rounded-lg">
                        Cadastrar produto
                    </Link>
                </div>
                <div className="py-8 border-t-2">
                </div>
            </div>

        </div>
        <div className="py-8 border-t-2"></div>
      </div>
    </div>
  );
}
