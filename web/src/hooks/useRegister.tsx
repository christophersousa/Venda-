import api from "../api/api";

interface PropsRegisterFisica{
    nomeCompleto: string;
    dataNascimento: string;
    cpf: string;
    telefone: string;
    genero: string;
    cep: string;
    email: string;
    senha: string;
}

interface PropsRegisterJuridico{
    nome: string;
    cnpj: string;
    telefone: string;
    razaoSocial: string;
    cep: string;
    email: string;
    senha: string;
}

export function useRegister(){
    async function handleRegisterFisica(data:PropsRegisterFisica) {
        api.post(`/usuario/cadastro`,{
           headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': true,
           },
            cep: data.cep,
            cpf: data.cpf,
            dataNascimento: data.dataNascimento,
            email: data.email,
            genero: data.genero,
            nomeCompleto: data.nomeCompleto,
            senha: data.senha,
            telefone: data.telefone
        }).then((response) => {

            console.log(response);
            window.location.href="/"

       }).catch((error) => {
           console.log("erro: " + error);

       });
   }
   async function handleRegisterJuridica(data:PropsRegisterJuridico) {
        api.post(`/empresa/cadastro`,{
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true,
        },
            cnpj: data.cnpj,
            email: data.email,
            nome: data.nome,
            razaoSocial: data.razaoSocial,
            senha: data.senha,
            telefone: data.telefone
        }).then((response) => {

            console.log(response);
            window.location.href="/"

    }).catch((error) => {
        console.log("erro: " + error);

    });
    }
   return {handleRegisterFisica, handleRegisterJuridica}
}