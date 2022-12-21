import logo from "../../assets/logo_venda+.png";

import { BsPerson, BsCart3, BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { DropDown } from "../Dropdown";
import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../Context/AuthContext";
import { useScroll } from "../../hooks/useScroll";
import api_products from "../../api/api_product";
import { CategoriaComTipo } from "../../interfaces/CategoriaComTipo";

export function Menu() {
  const { use, authenticated, handleLogout, cart } = useContext(Context);


  const { scrollFunction, backToTop, viewBtScroll } = useScroll();
  const [categorias, setCategorias] = useState<CategoriaComTipo[]>([]);

  useEffect(() => {
    api_products.get('/categoria/listTypes')
      .then(response => setCategorias(response.data))
      .catch(function(error){
        console.log(error)
      })

  }, [])

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <div className="bg-white h-36 pr-16 pl-16 flex flex-col items-center">
      <div className="h-32 w-full flex justify-between items-center">
        <img src={logo} alt="Venda+" className="w-14" />
        <div className="w-1/2">
          <form className="flex items-center">
            <div className="relative w-full">
              <input
                type="text"
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl"
                placeholder="Procure os seus produtos..."
              />
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-bold text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg"
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
              Buscar
            </button>
          </form>
        </div>

        {/* ------- Início DropDown Sing in ------- */}

        <div className="flex gap-8 items-center">
          {authenticated ? (
            <div className="flex justify-center">
              <div>
                <div className="dropdown relative">
                  <div
                    className="
                                    dropdown-toggle
                                    flex
                                    gap-1
                                    items-center
                                    cursor-pointer
                                    whitespace-nowrap
                                "
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BsPerson size={20} />
                    <div className=" flex flex-col text-xs">
                      <p className="text-xs">{use?.nome}</p>
                      <span className="xl">Minha conta</span>
                    </div>
                  </div>
                  <ul
                    className="
                                    dropdown-menu
                                    min-w-max
                                    absolute
                                    hidden
                                    flex-wrap
                                    flex-col
                                    bg-white
                                    text-base
                                    z-50
                                    float-left
                                    py-2
                                    list-none
                                    text-left
                                    rounded-lg
                                    shadow-lg
                                    mt-1
                                    m-0
                                    bg-clip-padding
                                    border-none
                                    overflow-y-auto
                                    overflow-x-hidden
                                "
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a
                        className="
                                        dropdown-item
                                        text-sm
                                        py-4
                                        px-4
                                        font-normal
                                        flex
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:bg-gray-100
                                        "
                      >
                        <img
                          className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          alt="Avatar"
                        />
                        <div className="mx-1">
                          <h1 className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                            {use?.nome}
                          </h1>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {use?.email}
                          </p>
                        </div>
                      </a>
                    </li>
                    <hr className="border-gray-200 dark:border-gray-700 " />
                    <li>
                    {use?.role != "usuario" ?
                      <div>
                        <Link
                          to="meusprodutos"
                          className="
                                          dropdown-item
                                          text-sm
                                          py-3
                                          px-4
                                          font-normal
                                          block
                                          w-full
                                          whitespace-nowrap
                                          bg-transparent
                                          text-gray-700
                                          hover:bg-gray-100
                                          "
                        >
                          Meus Produtos
                        </Link>
                        <Link
                        to="pedidos"
                        className="
                                        dropdown-item
                                        text-sm
                                        py-3
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:bg-gray-100
                                        "
                      >
                        Pedidos
                      </Link>
                      </div>
                      :
                      <Link
                        to="/meuspedidos"
                        className="
                                  dropdown-item
                                  text-sm
                                  py-3
                                  px-4
                                  font-normal
                                  block
                                  w-full
                                  whitespace-nowrap
                                  bg-transparent
                                  text-gray-700
                                  hover:bg-gray-100
                                  "
                      >
                        Meus Pedidos
                      </Link>
                    }
                    </li>

                    <hr className="border-gray-200 dark:border-gray-700 " />
                    <li>
                      <a
                        className="
                                        dropdown-item
                                        text-sm
                                        py-3
                                        px-4
                                        font-normal
                                        block
                                        w-full
                                        whitespace-nowrap
                                        bg-transparent
                                        text-gray-700
                                        hover:bg-gray-100
                                        cursor-pointer
                                        "
                        onClick={handleLogout}
                      >
                        Sair
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-1 cursor-pointer "
            >
              <BsPerson size={20} />
              <div className=" flex flex-col text-xs">
                <span className="xl">Cadastro / Login</span>
              </div>
            </Link>
          )}

          {/* ------- Fim DropDown Sing in ------- */}
          {use?.role == "usuario" &&
            <Link to="/carrinho">
              <div className="flex items-center gap-1 cursor-pointer ">
                <div className="inline-flex relative w-fit">
                  {cart.length > 0 ? (
                    <div className="absolute inline-block -top-1 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-deep-orange-700 text-white rounded-full z-10">
                      {cart.length}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="bg-background-gray p-2 rounded-full">
                    <BsCart3 size={20} />
                  </div>
                </div>

                <div className="text-xs flex items-center">
                  Carrinho
                  <BsFillCaretDownFill />
                </div>
              </div>
            </Link>
          }
        </div>
      </div>
      <div>
        <ul className="flex gap-5 p-3">
          <li className="flex items-center">
            <Link to="/">Home</Link>
          </li>
          {categorias.map((c, index) => {
            return (
              <div key={index}>
                <DropDown name={c.name} list={c.values} />
              </div>
            );
          })}
        </ul>
      </div>

      <button
        type="button"
        className=" rounded-full w-12 h-12 z-10 fixed bottom-5 right-5 hidden text-white bg-background-orange border border-orange-900 hover:bg-orange-900 hover:ring-4 hover:outline-none hover:ring-orange-600"
        id="btn-back-to-top"
        onClick={backToTop}
        style={{ display: viewBtScroll }}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
}
