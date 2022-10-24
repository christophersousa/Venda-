import { Input } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IconType } from "react-icons";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import { useFormatPassword } from "../../hooks/useFormatPassword";

export function Login(){
    const passwordFormat = useFormatPassword()
    const  password = useRef<HTMLInputElement>(null)
    const {handleLogin} = useAuth();

    const {
        handleSubmit,
        setValue,
        getValues,
        register,
        reset,
        formState: { isValid, errors },
      } = useForm({ mode: "onChange",
      defaultValues : {
        email: '',
        password: '',
      } });
      const onSubmit = (data: any) => {
        alert(`${data.email} logado`);
        handleLogin(data)
      };


    return (
        <div className="flex items-center justify-center py-16 px-20 w-full">

            <div className="bg-white flex flex-col items-center justify-center gap-6 w-1/2 h-96 border-r border-black">
                <h1 className="text-gray-900 font-bold">Cadastre-se</h1>

                <div className="w-1/2">
                    <Input
                    type={'email'}
                    variant="outlined"
                    label="e-mail"
                    className="bg-gray-50 border border-gray-300 "/>
                </div>

                <button className="bg-background-orange w-1/3 py-2 rounded-lg text-white font-weight">
                    Cadastre-se
                </button>
            </div>
            <form className="bg-white flex flex-col items-center justify-center gap-6 w-1/2 h-96 border-l border-black" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-gray-900 font-bold">Já sou cliente</h1>

                <div className="w-1/2">
                    <Input
                    type={'email'}
                    value={getValues('email')}
                    onChange={(e) => {
                        setValue('email', e.target.value, {shouldValidate: true})
                     }}
                    variant="outlined"
                    label="e-mail"
                    className="bg-gray-50 border border-gray-300 "/>
                </div>


                <div className="relative w-1/2">
                    <div className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer z-50" onClick={()=>{passwordFormat.showPassword(password)}}>
                        {passwordFormat.icon ? <BsFillEyeFill />:<BsFillEyeSlashFill/>}
                    </div>
                    <Input
                    type={passwordFormat.typePassword}
                    variant="outlined"
                    value={getValues('password')}
                    onChange={(e) => {
                        setValue('password', e.target.value, {shouldValidate: true})
                     }}
                    label="senha"
                    className="bg-gray-50 border border-gray-300"
                    ref={password}
                    />
                </div>
                <button type="submit" className="bg-background-orange w-1/3 py-2 rounded-lg text-white font-weight">
                    Logar
                </button>
                <div className="w-1/2 flex justify-start text-xs">
                    <a href="" className="underline">Esqueci a minha senha..</a>
                </div>
            </form>
        </div>
    )
}