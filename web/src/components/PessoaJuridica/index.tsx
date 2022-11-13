import { Input, Radio } from "@material-tailwind/react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useFormatPassword } from "../../hooks/useFormatPassword";
import { useMask } from "../../hooks/useMask";
import { useRegister } from "../../hooks/useRegister";

export function PessoaJuridica(){
    const passwordFormat = useFormatPassword()
    const  password = useRef<HTMLInputElement>(null)

    const mask = useMask()

    const {
        handleSubmit,
        setValue,
        getValues,
        register,
        reset,
        formState: { isValid, errors },
      } = useForm({ mode: "onChange",
      defaultValues : {
        nome: '',
        telefone: '',
        cep: '',
        cnpj: '',
        razaoSocial: '',
        email: '',
        senha: '',
      } });
      const onSubmit = (data: any) => {
        alert(`${data.email} cadastrado`);
        useRegister().handleRegisterJuridica(data)
      };

    return(
        <form action="" className="flex flex-col gap-3 justify-start w-1/2"
         onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col gap-3 mt-6">
                <h1 className="text-2xl font-bold">CNPJ</h1>
                <span className="text-color-gray-text text-xs">precisamos para a emissão de Notas fiscais</span>
                <div className="w-72">
                    <Input
                    value={getValues('cnpj')}
                    onChange={(e) => {
                        setValue('cnpj', mask.maskCnpj(e.target.value), {shouldValidate: true})
                     }}
                    variant="outlined"
                    label="CNPJ"
                    className="bg-gray-50 border border-gray-300"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
                <h1 className="text-2xl font-bold">Razão social</h1>
                <span className="text-color-gray-text text-xs">precisamos para a emissão de Notas fiscais</span>
                <div className="w-full pr-20">
                    <Input
                    value={getValues('razaoSocial')}
                    onChange={(e) => {
                        setValue('razaoSocial', e.target.value, {shouldValidate: true})
                     }}
                    variant="outlined"
                    label="Razão social"
                    className="bg-gray-50 border border-gray-300"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
                <h1 className="text-2xl font-bold">Telefone</h1>
                <span className="text-color-gray-text text-xs">caso precisemos entrar em contato sobre seus pedidos</span>
                <div className="w-72">
                    <Input
                    value={getValues('telefone')}
                    onChange={(e) => {
                        setValue('telefone', mask.maskTelefone(e.target.value), {shouldValidate: true})
                     }}
                    variant="outlined"
                    label="Telefone"
                    className="bg-gray-50 border border-gray-300"/>
                </div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
                <h1 className="text-2xl font-bold">Nome da empresa</h1>
                <span className="text-color-gray-text text-xs">para que os usuários possam ter um contato melhor com a sua loja </span>
                <div className="w-full pr-20">
                    <Input
                    value={getValues('nome')}
                    onChange={(e) => {
                        setValue('nome', e.target.value, {shouldValidate: true})
                     }}
                    variant="outlined"
                    label="Nome da empresa"
                    className="bg-gray-50 border border-gray-300"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-3 mt-6">
                <h1 className="text-2xl font-bold">CEP</h1>
                <div className="w-64 flex">
                    <Input
                    value={getValues('cep')}
                    onChange={(e) => {
                        setValue('cep', mask.maskCep(e.target.value), {shouldValidate: true})
                     }}
                    variant="outlined"
                    label="CEP"
                    className="bg-gray-50 border border-gray-300"
                    />
                    <button className="bg-background-orange w-16 py-2 rounded-lg text-white font-weight">OK</button>
                </div>
                <a href="https://buscacepinter.correios.com.br/app/endereco/index.php" className="text-color-gray-text text-xs underline w-20" target="_blank">Não sei o CEP</a>
            </div>
            <div className="flex flex-col gap-3 mt-6">
                <h1 className="text-2xl font-bold">E-mail</h1>
                <span className="text-color-gray-text text-xs">informe um e-mail válido.</span>
                <div className="w-full pr-20">
                    <Input
                    type={'email'}
                    value={getValues('email')}
                    onChange={(e) => {
                        setValue('email', e.target.value, {shouldValidate: true})
                     }}
                    variant="outlined"
                    label="e-mail"
                    className="bg-gray-50 border border-gray-300"/>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-6">
                <h1 className="text-2xl font-bold">Senha</h1>
                <span className="text-color-gray-text text-xs">precisa conter entre 6 a 20 caracteres</span>
                <div className="w-72">
                    <div className="relative">
                        <div className="flex absolute inset-y-0 right-0 items-center pr-3 cursor-pointer z-50" onClick={()=>{passwordFormat.showPassword(password)}}>
                            {passwordFormat.icon ? <BsFillEyeFill />:<BsFillEyeSlashFill/>}
                        </div>
                        <Input
                        type={passwordFormat.typePassword}
                        value={getValues('senha')}
                        onChange={(e) => {
                            setValue('senha', e.target.value, {shouldValidate: true})
                        }}
                        variant="outlined"
                        label="senha"
                        className="bg-gray-50 border border-gray-300"
                        ref={password}
                        />
                    </div>

                </div>
            </div>
            <div className="w-full flex justify-center mt-6">
                <button type="submit" className=" font-bold w-1/2 justify-center inline-flex items-center py-2.5 px-3 text-sm text-white bg-background-orange border border-orange-900 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-600 rounded-lg">
                    Cadastre-se
                </button>
            </div>
        </form>
    )
}