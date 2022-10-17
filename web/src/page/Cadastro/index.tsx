import { Radio } from "@material-tailwind/react";
import { useState } from "react";
import { PessoaFisica } from "../../components/PessoaFisica";
import { PessoaJuridica } from "../../components/PessoaJuridica";
export function Cadastro(){
    const [cadastro, setcadastro] = useState<boolean>(false)

    return (
        <div className="h-screen py-6">
            <div className="bg-white flex flex-col items-center p-12">
                <h1 className="text-4xl">Criar o seu cadastro</h1>
                <p className="w-1/2 text-center mt-4 font-bold text-color-gray-text">Desfrute de um atendimento personalizado e cheio de amor, com as tecnicas mais avançadas para satisfação dos nossos clientes </p>
                <div className="flex flex-col gap-3 justify-start w-1/2 mt-6">
                    <h1 className="text-2xl font-bold">Tipo de conta</h1>
                    <div className="flex gap-3">

                        <Radio id="fisica" name="type" label="Pessoa física" onClick={()=>setcadastro(false)} defaultChecked/>
                        <Radio id="juridica" name="type" label="Pessoa Jurídica" onClick={()=>setcadastro(true)}/>

                    </div>
                </div>
                {cadastro ? <PessoaJuridica />:<PessoaFisica/>}
            </div>
        </div>
    )
}