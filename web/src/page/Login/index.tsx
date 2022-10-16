import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";

export function Login(){
    const [typePassword, setTypePassword] = useState<string>("password")
    const [ico, setIconPassword] = useState<boolean>(false)
    const  password = useRef<HTMLInputElement>(null)
    const showPassword = () =>{
        const type = password.current?.getAttribute('type') === 'password' ? 'text' : 'password'
        const icon = ico === false ? true : false
        setTypePassword(type)
        setIconPassword(icon)
    }

    return (
        <div className="flex items-center justify-center py-16 px-20 w-full">

            <div className="bg-white flex flex-col items-center justify-center gap-6 w-1/2 h-96 border-r border-black">
                <h1 className="text-gray-900">Cadastre-se</h1>
                <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg w-1/2" placeholder="E-mail" required></input>
                <button className="bg-background-orange w-1/3 py-2 rounded-lg text-white font-weight">
                    Cadastre-se
                </button>
            </div>
            <div className="bg-white flex flex-col items-center justify-center gap-6 w-1/2 h-96 border-l border-black">
                <h1 className="text-gray-900">Já sou cliente</h1>
                <input type="email" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg w-1/2" placeholder="E-mail/CPF" required></input>
                <div className="relative w-1/2">
                    <div className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer" onClick={showPassword}>
                        {ico ? <BsFillEyeFill />:<BsFillEyeSlashFill/>}
                    </div>
                    <input type={typePassword} ref={password} id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-lg w-full" placeholder="Senha" required></input>
                </div>
                <button className="bg-background-orange w-1/3 py-2 rounded-lg text-white font-weight">
                    Logar
                </button>
                <div className="w-1/2 flex justify-start text-xs">
                    <a href="" className="underline">Esqueci a minha senha..</a>
                </div>
            </div>
        </div>
    )
}