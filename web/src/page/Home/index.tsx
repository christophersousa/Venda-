import { useEffect, useState } from "react";
import api from "../../api/api_product";
import { Carousel } from "../../components/Carousel";
import { ListaTiposProdutos } from "../../components/ListaTiposProdutos";
import { TipoProduto } from "../../interfaces/TipoProduto";

export function Home(){
    const [tiposProdutos, setTiposProdutos] = useState<TipoProduto[]>([]);

    useEffect(() => {
        api.get("/tipo/list")
            .then(response => setTiposProdutos(response.data))
            .catch(function(error){
                console.log(error);
            })
    }, []);
    return(
        <div>
            <Carousel/>
            <div className=" bg-white p-padding-container py-16">
                <ListaTiposProdutos listaTipoProduto={tiposProdutos}/>
                {/* <div>
                    <h2 className="font-bold text-xl">Computadores</h2>
                </div>
                <div className="py-8 border-t-2">
                    <MultCarousel/>
                </div> */}
            </div>
        </div>
    )
}