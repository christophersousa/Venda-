export interface PropsPedidos{
    id: number,
    createdDate: string,
    valorTotal: number,
    address: {
      id: number,
      cep: string,
      uf: string,
      cidade: string,
      bairro: string,
      logradouro:string,
      numero: number,
      complemento: string
    },
    status: string
  }

export interface PropsOrderItemList{
    purchaseItems: PropsOrderItem[];
}

export interface PropsOrderItem {
  id: number,
  quantidade: number,
  preco: number,
  pedidoId: number,
  empresaId: number,
  product: {
    id: number,
    nome: string,
    precoAnterior: number,
    preco: number,
    marca: string,
    estoque: number,
    type: {
      id: number,
      nome: string
    }
  },
  statusPedidoItem: string
}