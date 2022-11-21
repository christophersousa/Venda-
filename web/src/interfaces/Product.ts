export interface PropsProduct {
  id: number;
  nome: string;
  descricao: string;
  precoAnterior: number;
  preco: number;
  marca: string;
  fotos: string[];
}

export interface PropsProductRegister {
  nome: string;
  preco: number;
  descricao: string;
  categoriaId: string;
  estoque: number;
  marca: string;
  precoAnterior: number;
  tipoId: string;
  fotos: File
}

export interface PropsPhotos{
  id: number;
  photo: File;
}