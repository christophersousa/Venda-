import { Input, Select, Option, Textarea } from "@material-tailwind/react";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../../Context/AuthContext";
import { useCart } from "../../hooks/useCart";
import useProduct from "../../hooks/useProduct";
import { useRegister } from "../../hooks/useRegister";
import { CategoriaComTipo, CategoriaComTipoCompleto } from "../../interfaces/CategoriaComTipo";
import api_products from "../../api/api_product";
import { Categoria } from "../../interfaces/Categoria";
import { DropDown } from "../../components/Dropdown";
import { Dropzone } from "../../components/Dropzone";

export function RegisterProduto() {

    const{createProduct} = useProduct()
    const {formatMoney} = useCart()

    const [categoriasType, setCategoriasType] = useState<CategoriaComTipoCompleto[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>();


    useEffect(() => {
        api_products.get('/categoria/listCategoriasTypes')
        .then(response => setCategoriasType(response.data))
        .catch(function(error){
            console.log(error)
        })

        api_products.get('/categoria/list')
        .then(response => setCategorias(response.data))
        .catch(function(error){
            console.log(error)
        })
    }, [])

    console.log(categoriasType)

    const {
        handleSubmit,
        setValue,
        getValues,
        register,
        reset,
        formState: { isValid, errors },
    } = useForm({
        mode: "onChange",
        defaultValues: {
        categoriaId: "",
        tipoId: "",
        descricao: "",
        nome: "",
        marca: "",
        precoAnterior: 0,
        preco: 0,
        estoque: "",
        fotos: File,
        },
    });
    const onSubmit = (data: any) => {
        data.fotos = selectedFile
        alert(`${data.email} cadastrado`);
        createProduct(data);
    };

    function handleCategorias(){
        const c = categorias.filter((e)=> e.id === Number(getValues('categoriaId')))
        console.log("Categoria"+c);
    }

  return(
    <form

        action=""
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex  gap-4">
            <div className=" bg-white p-padding-container m-margin-container
            py-16 w-2/3">
                <div className="flex p-2 items-center">
                    <h2 className="font-bold text-xl">Informações do produto</h2>
                </div>
                <div className="py-8 border-t-2">

                    <div className="flex flex-wrap gap-3 justify-start "
                        >
                            <div className="flex flex-col gap-3 mt-6 w-1/2">
                                <h1 className="font-bold">Nome</h1>
                                <div className="w-full pr-20">
                                    <Input
                                    value={getValues('nome')}
                                    onChange={(e) => {
                                        setValue('nome', e.target.value, {shouldValidate: true})
                                    }}
                                    variant="outlined"
                                    label="Nome"
                                    className="bg-gray-50 border border-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6 w-2/5 ml-auto">
                                <h1 className="font-bold">Estoque</h1>
                                <div className="pr-20">
                                    <Input
                                    value={getValues('estoque')}
                                    onChange={(e) => {
                                        setValue('estoque', e.target.value, {shouldValidate: true})
                                    }}
                                    variant="outlined"
                                    label="Estoque"
                                    className="bg-gray-50 border border-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6 w-1/2">
                                <h1 className="font-bold">Marca</h1>
                                <div className="w-full pr-20">
                                    <Input
                                    value={getValues('marca')}
                                    onChange={(e) => {
                                        setValue('marca', e.target.value, {shouldValidate: true})
                                    }}
                                    variant="outlined"
                                    label="Marca"
                                    className="bg-gray-50 border border-gray-300"
                                    />
                                </div>
                            </div>


                            <div className="flex flex-col gap-3 mt-6 w-2/5 ml-auto">
                                <h1 className="font-bold">Valor</h1>
                                <div className="pr-20">
                                    <Input

                                    value={getValues('preco')}
                                    onChange={(e) => {
                                        setValue('preco', Number(e.target.value), {shouldValidate: true})
                                    }}
                                    variant="outlined"
                                    label="Valor"
                                    className="bg-gray-50 border border-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6 w-1/2">
                                <h1 className="font-bold">Categorias</h1>
                                <div className="w-full pr-20">

                                    <div className="">
                                        <div className="">
                                            <select
                                            onChange={(e) => {
                                            setValue('categoriaId', e.target.value, {shouldValidate: true}),
                                            console.log(getValues('categoriaId'))
                                            }}
                                            className="
                                            form-select
                                            appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            bg-gray-50
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                                <option value=''>Selecione uma categoria</option>
                                                {categorias.map((response, key) =>{
                                                return  <option key={key} value={String(response.id)}>{response.nome}</option>
                                            })}
                                            </select>
                                        </div>
                                        </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6 w-2/5 ml-auto">
                                <h1 className="font-bold">Tipo</h1>
                                <div className="w-full pr-20">

                                    <div className="">
                                        <div className="">
                                            <select
                                            onChange={(e) => {
                                                setValue('tipoId', e.target.value, {shouldValidate: true})
                                            }}
                                            className="
                                            form-select
                                            appearance-none
                                            block
                                            w-full
                                            px-3
                                            py-1.5
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            bg-gray-50
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                                <option value=''>Selecione um tipo</option>
                                                {getValues("categoriaId") != ''?
                                                    categoriasType[Number(getValues("categoriaId")) - 1].values.map((response, key) =>{
                                                        return  <option key={key} value={String(response.id)}>{response.nome}</option>
                                                    })
                                                :
                                                ''
                                        }
                                            </select>
                                        </div>
                                        </div>
                                </div>
                            </div>


                            <div className="flex flex-col gap-3 mt-6 w-4/5">
                                <h1 className="font-bold">Descrição</h1>
                                <div className="pr-20">
                                    <Textarea
                                        value={getValues('descricao')}
                                        onChange={(e) => {
                                            setValue('descricao', e.target.value, {shouldValidate: true})
                                        }}
                                        label="Descrição"
                                    />
                                </div>
                            </div>

                    </div>

                </div>
            </div>
            <div className=" bg-white p-padding-container m-margin-container
            py-16 w-1/3 ml-auto">
                <Dropzone onFileUploaded={setSelectedFile}/>
            </div>
        </div>
        <div className="w-full flex justify-center mt-6 mb-6">
            <button type="submit" className=" font-bold w-1/3 justify-center inline-flex items-center py-2.5 px-3 text-sm text-white bg-background-orange border border-orange-900 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-600 rounded-lg">
                Cadastrar
            </button>
        </div>
    </form>
    )
}
