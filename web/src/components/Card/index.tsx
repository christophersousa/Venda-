interface ProxyCard{
    name: string;
    urlImg: string;
    valor_anterior: string;
    valor: string;
}

export function Card({ name, urlImg, valor_anterior, valor}:ProxyCard){
    return(
        <a href="#" className="flex justify-center h-full">
            <div className="rounded-lg shadow-lg bg-white max-w-sm flex flex-col justify-between">
                <a href="#!">
                <img className="rounded-t-lg" src={urlImg} alt=""/>
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xs font-medium mb-2">{name}</h5>
                    <p className="text-color-gray-text text-xs mt-4 line-through">
                        {valor_anterior}
                    </p>
                    <h1 className="font-bold text-lg">{valor}</h1>
                </div>
            </div>
        </a>
    )
}