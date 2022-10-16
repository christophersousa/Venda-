import logo from "../../assets/logo_venda+.png"

import { BsPerson, BsCart3, BsFillCaretDownFill } from "react-icons/bs";

export function Menu(){
    const categorias = ['Informática', 'Celulares', 'Móveis', 'Eletrodomésticos', 'Cosméticos']
    return (
        <div className="bg-white h-36 pr-16 pl-16 flex flex-col items-center">
            <div className="h-32 w-full flex justify-between items-center">
                <img src={logo} alt="Venda+" className="w-14" />
                <div className="w-1/2">
                    <form className="flex items-center">
                        <div className="relative w-full">
                            <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-xl" placeholder="Procure os seus produtos..."/>
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                        </div>
                        <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-xl">
                            <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Buscar
                        </button>
                    </form>
                </div>
                <div className="flex gap-8 items-center">
                    <div className="flex items-center gap-1 cursor-pointer ">
                        <BsPerson size={20}/>
                        <div className=" flex flex-col text-xs">
                            <p className="text-xs">Sing In</p>
                            <span className="xl">Minha conta</span>
                        </div>
                    </div >
                    <div className="flex items-center gap-1 cursor-pointer ">
                        <div className="bg-background-gray p-2 rounded-full">
                            <BsCart3  size={20}/>
                        </div>
                        <div className="text-xs flex items-center">
                            Carrinho
                            <BsFillCaretDownFill/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex gap-5 p-3">
                    <li className="flex items-center">
                        <span>Home</span>
                    </li>
                    {categorias.map((c) =>{
                        return <li className="flex items-center">
                                    <span>{c}</span>
                                    <BsFillCaretDownFill size={10} className="mt-2"/>
                                </li>
                    })}

                </ul>
            </div>
        </div>
    )
}