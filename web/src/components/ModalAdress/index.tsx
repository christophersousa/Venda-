import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";

interface props{
  cep: string,
  uf: string,
  cidade: string,
  bairro: string,
  logradouro: string,
  numero: number,
  complemento: string
  toggler: () => void
}

interface props2{

}
export function ModalAdress({toggler,cep, uf, cidade, bairro, logradouro, complemento, numero}:props){

    const {
      handleSubmit,
      setValue,
      getValues,
      register,
      reset,
      formState: { isValid, errors },
    } = useForm({ mode: "onChange",
    defaultValues : {
      uf: uf,
      cidade: cidade,
      bairro: bairro,
      logradouro: logradouro,
      numero: numero,
      cep: cep,
      complemento: complemento,
    } });
    const onSubmit = (data: any) => {
      alert(`${data.email} cadastrado`);
    };

    return(
          <div className="static">
            <div
              className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"
            ></div>
            <div className="fixed top-0 right-0 left-0 z-20 h-full flex justify-center items-center">
              <div className="mx-4 my-4 bg-white">
                  <div className="flex justify-end">
                      <button
                          className=" text-red-900 px-2 m-2"
                          onClick={() => toggler()}
                      >
                          X
                      </button>
                  </div>
                  <div className=" bg-white p-8">
                      <h1 className="font-bold text-center">Editar endereço</h1>
                      <form action="" className="flex flex-col gap-3 justify-start"
                        onSubmit={handleSubmit(onSubmit)}>
                          <div className="flex gap-3">

                            <div className="flex flex-col gap-3 mt-6">
                                  <h1 className="font-bold">Estado</h1>
                                  <div className="w-72">
                                      <Input
                                      value={getValues('uf')}
                                      onChange={(e) => {
                                          setValue('uf', e.target.value, {shouldValidate: true})
                                      }}
                                      variant="outlined"
                                      label="Estado"
                                      className="bg-gray-50 border border-gray-300"/>
                                 </div>

                              </div>

                            <div className="flex flex-col gap-3 mt-6">
                                <h1 className="font-bold">Cidade</h1>
                                <div className="w-72">
                                    <Input
                                    value={getValues('cidade')}
                                    onChange={(e) => {
                                        setValue('cidade', e.target.value, {shouldValidate: true})
                                    }}
                                    variant="outlined"
                                    label="Cidade"
                                    className="bg-gray-50 border border-gray-300"/>
                                </div>

                              </div>
                              <div className="flex flex-col gap-3 mt-6">
                                <h1 className="font-bold">Bairro</h1>
                                <div className="w-72">
                                    <Input
                                    value={getValues('bairro')}
                                    onChange={(e) => {
                                        setValue('bairro', e.target.value, {shouldValidate: true})
                                    }}
                                    variant="outlined"
                                    label="Bairro"
                                    className="bg-gray-50 border border-gray-300"/>
                                </div>

                            </div>
                          </div>
                          <div className="flex justify-between gap-3">
                            <div className="flex flex-col gap-3 mt-6 w-[80%]">
                                  <h1 className="font-bold">Rua</h1>
                                  <div className="w-[80%]">
                                      <Input
                                      value={getValues('logradouro')}
                                      onChange={(e) => {
                                          setValue('logradouro', e.target.value, {shouldValidate: true})
                                      }}
                                      variant="outlined"
                                      label="Rua"
                                      className="bg-gray-50 border border-gray-300"/>
                                  </div>

                              </div>
                              <div className="flex flex-col gap-3 mt-6">
                                  <h1 className="font-bold">Numero</h1>
                                  <div className="w-72">
                                      <Input
                                      value={getValues('numero')}
                                      onChange={(e) => {
                                          setValue('numero', Number(e.target.value), {shouldValidate: true})
                                      }}
                                      variant="outlined"
                                      label="Numero"
                                      className="bg-gray-50 border border-gray-300"/>
                                  </div>

                            </div>
                          </div>
                          <div className="w-full flex justify-center mt-6">
                              <button type="submit" className=" font-bold w-1/2 justify-center inline-flex items-center py-2.5 px-3 text-sm text-white bg-background-orange border border-orange-900 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-orange-600 rounded-lg">
                                  Editar
                              </button>
                          </div>

                      </form>
                  </div>
              </div>
            </div>
          </div>

    )
}