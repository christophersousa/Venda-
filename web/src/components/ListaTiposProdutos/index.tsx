import { ListaTipoProduto } from "../../interfaces/ListaTipoProduto";
import { MultCarousel } from "../MultCarousel";

export function ListaTiposProdutos({listaTipoProduto}: ListaTipoProduto){
    return(
        <>
            <div>
                {listaTipoProduto.map(tipo => 
                    <>
                    <h2 className="font-bold text-xl">{tipo.nome}</h2>
                    <div className="py-8 border-t-2">
                        <MultCarousel tipoProduto={tipo.id}/>
                    </div></>
                )}
            </div>
            
        </>
    )
}