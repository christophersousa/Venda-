import { Breadcrumbs } from "@material-tailwind/react";
import { useContext } from "react";
import { BsCreditCard2Back, BsFillBasket2Fill } from "react-icons/bs";
import { CarouselProduto } from "../../components/CarouselProduto";
import { MultCarousel } from "../../components/MultCarousel";
import { Context } from "../../Context/AuthContext";

export function Produto(){

    const{product} = useContext(Context)

    return(
        <div>

            <Breadcrumbs className="m-margin-container">
                <a href="#" className="opacity-60">
                    Home
                </a>
                <a href="#" className="opacity-60">
                    Computador
                </a>
                <a href="#">{product?.title}</a>
            </Breadcrumbs>

            <div
            className=" bg-white p-padding-container m-margin-container
                 py-16">
            <div className="flex p-2 gap-6 justify-between">
                <CarouselProduto img1={product?.imageUrl} img2={product?.images2} img3={product?.images2} />
                <div className="flex flex-col gap-4 w-1/2 p-2 mt-4">
                    <h1 className="font-bold text-xl">{product?.title}</h1>
                    <div className="flex items-center ">
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Primeira estrela</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Segunda estrela</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Terceira estrela</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Quarta estrela</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Quinta estrela</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">4.95 de 5</p>
                    </div>
                    <p className="ml-2 text-sm font-medium mt-4 max-h-20 overflow-hidden">
                        {product?.descricao}
                    </p>

                    <a href="#infor" className="ml-2 text-sm font-medium underline">mais informações...</a>

                    <div>
                        <p className="text-color-gray-text text-xs mt-4 line-through">
                            {product?.valor_anterior}
                        </p>
                        <h1 className="font-bold text-3xl">{product?.valor}</h1>
                        <span className="text-color-gray-text text-xs flex items-center gap-1 mt-2">
                            <BsCreditCard2Back/>
                            até 8x R$ {Number(product?.valor)/8}
                        </span>
                    </div>

                    <div className="w-full flex justify-center flex-col gap-2 items-center mt-10">
                        <button type="submit" className=" font-bold w-2/3 justify-center  gap-2 inline-flex items-center py-2.5 px-3 text-xl text-white bg-background-orange border border-orange-900 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-600 rounded-lg">
                            <BsFillBasket2Fill/>
                            Comprar
                        </button>

                        <button type="submit" className=" font-bold w-2/3 justify-center  gap-2 inline-flex items-center py-2.5 px-3 text-xl text-white bg-background-secundary border border-gray-400 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-lg">
                            Adicionar ao carrinho
                        </button>

                    </div>
                </div>
            </div>
            </div>
            <div className=" bg-white p-padding-container m-margin-container
                 py-16">
                <div>
                    <h2 className="font-bold text-xl">Você também pode gostar disso</h2>
                </div>
                <div className="py-8 border-t-2">
                    <MultCarousel/>
                </div>
            </div>

            <div className=" bg-white p-padding-container m-margin-container
                 py-16" id="infor">
                <div>
                    <h2 className="font-bold text-xl">Informações do produto</h2>
                </div>
                <div className="py-8 border-t-2">
                    {product?.descricao}
                </div>
            </div>

            <div className=" bg-white p-padding-container m-margin-container
                 py-16">
                <div>
                    <h2 className="font-bold text-xl">Ficha tecnica</h2>
                </div>
                <div className="py-8 border-t-2">
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full">

                                    <tbody>
                                        <tr className="bg-gray-100 border-b">
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap w-[30%]">
                                                {product?.ficha.codigo}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {product?.ficha.codigo}
                                            </td>

                                        </tr>
                                        <tr className="bg-white border-b">
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {product?.ficha.codigo_barras}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {product?.ficha.codigo_barras}
                                            </td>

                                        </tr>

                                        <tr className="bg-white border-b">
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {product?.ficha.Garantia}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {product?.ficha.Garantia}
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}