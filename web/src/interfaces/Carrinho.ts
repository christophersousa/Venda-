import { PropsProduct } from "./Product";

export interface PropsCart{
    cartItems: PropsItemsCart[];
    valorTotal: number
}

interface PropsItemsCart{
    id: number;
    produto: PropsProduct;
    quantidade: number;
    imagem: any;
}