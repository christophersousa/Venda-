import { Input, Select, Option, Textarea } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useRegister } from "../../hooks/useRegister";

export function RegisterProduto() {
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
      descricao: "",
      nome: "",
      preco: "",
    },
  });
  const onSubmit = (data: any) => {
    alert(`${data.email} cadastrado`);
    useRegister().handleRegisterFisica(data);
  };

    return(
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap gap-2 px-4"
        >
          <div
            className=" bg-white p-padding-container m-margin-container
                 py-16 w-2/3"
          >
            <div className="flex p-2 items-center">
              <h2 className="font-bold text-xl">Informações do produto</h2>
            </div>
            <div className="py-8 border-t-2">
              <div className="flex flex-wrap gap-3 justify-start ">
                <div className="flex flex-col gap-3 mt-6 w-1/2">
                  <h1 className="font-bold">Nome</h1>
                  <div className="w-full pr-20">
                    <Input
                      value={getValues("nome")}
                      onChange={(e) => {
                        setValue("nome", e.target.value, { shouldValidate: true });
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
                                    value={getValues('nome')}
                                    onChange={(e) => {
                                        setValue('nome', e.target.value, {shouldValidate: true})
                                    }}
                                    variant="outlined"
                                    label="Estoque"
                                    className="bg-gray-50 border border-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6 w-1/2">
                                <h1 className="font-bold">Categorias</h1>
                                <div className="w-full pr-20">
                                    <Select label="Categorias" className="bg-gray-50">
                                        <Option>Smartphones</Option>
                                        <Option>Computadores</Option>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6 w-2/5 ml-auto">
                                <h1 className="font-bold">Valor</h1>
                                <div className="pr-20">
                                    <Input
                                    value={getValues('nome')}
                                    onChange={(e) => {
                                        setValue('nome', e.target.value, {shouldValidate: true})
                                    }}
                                    variant="outlined"
                                    label="Valor"
                                    className="bg-gray-50 border border-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 mt-6 w-4/5">
                                <h1 className="font-bold">Descrição</h1>
                                <div className="pr-20">
                                    <Textarea label="Descrição"/>
                                </div>
                            </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
