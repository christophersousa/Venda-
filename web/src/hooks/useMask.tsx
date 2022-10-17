export function useMask(){
    const maskDate = (value : string) => {
        let v = value.replace(/\D/g,'').slice(0, 8);
        if( v.length === 1 && Number(v[0]) >=4){
            return `${v[0]}`
        }
        if (v.length > 5) {
          return `${v.slice(0,2)}/${v.slice(2,4)}/${v.slice(4)}`;
        }
        else if (v.length >= 3) {
            if(Number(v.slice(0,2)) >= 32){
                return `${v.slice(0,2)}`
            }
            else if(Number(v.slice(2,4)) >= 13){
                return `${v.slice(0,2)}/${v.slice(2,4)}`;
            }
            return `${v.slice(0,2)}/${v.slice(2)}`;
        }
        return v
      }

    const maskCpf = (value: string) =>{
        let v = value.replace(/\D/g,'').slice(0, 11);
        if(v.length >= 10){
            return `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6,9)}-${v.slice(9)}`;
        }
        else if (v.length >= 7) {
          return `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6)}`;
        }
        else if (v.length >= 4) {
            return `${v.slice(0,3)}.${v.slice(3)}`;
        }
        return v
    }

    const maskTelefone = (value: string) =>{
        let v = value.replace(/\D/g,'').slice(0, 11);
       if (v.length > 7) {
          return `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
        }
        else if (v.length >= 3) {
            return `(${v.slice(0,2)}) ${v.slice(2)}`;
        }
        return v
    }

    const maskCep = (value: string) =>{
        let v = value.replace(/\D/g,'').slice(0, 8);
        if (v.length >= 6) {
            return `${v.slice(0,5)}-${v.slice(5)}`;
        }
        return v
    }

    const maskCnpj = (value: string) =>{
        let v = value.replace(/\D/g,'').slice(0, 15);
        if(v.length >= 14) {
            return `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6,9)}/${v.slice(9,13)}-${v.slice(13)}`;
        }
        if(v.length >= 10){
            return `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6,9)}/${v.slice(9)}`;
        }
        else if (v.length >= 7) {
          return `${v.slice(0,3)}.${v.slice(3,6)}.${v.slice(6)}`;
        }
        else if (v.length >= 4) {
            return `${v.slice(0,3)}.${v.slice(3)}`;
        }
        return v
    }

    return {maskCep, maskTelefone, maskCpf, maskDate, maskCnpj}
}