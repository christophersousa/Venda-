import { createContext, useState, useEffect, ReactNode } from "react";

import useAuth from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import useProduct from "../hooks/useProduct";
interface IRouterContextProps {
  children: ReactNode;
}

interface User {
  id: number;
  nome: string;
  email: string;
  token: string;
  status: string;
}

interface PropsLoginUser {
  email: string;
  password: string;
}

interface Ficha {
  codigo: string;
  codigo_barras: string;
  Garantia: string;
}

interface PropsProduct {
  title: string;
  link: string;
  imageUrl: string;
  images2: string;
  valor_anterior: number;
  valor: number;
  descricao: string;
  ficha: Ficha;
}

interface Categorias{
  id: number;
  nome: string;
}

interface ProposContext {
  use: User | null | undefined;
  loading: boolean;
  authenticated: boolean;
  handleLogin: (data: PropsLoginUser) => Promise<void>;
  handleLogout: () => void;
  handleProduct: (product: PropsProduct) => void;
  product: PropsProduct | undefined;
  cart: PropsProduct[];
  handleCart: (data: PropsProduct) => void;
  handleRemoveCart: (data: PropsProduct) => void;
  categoria: Categorias[]
}

const Context = createContext({} as ProposContext);

function AuthProvider({ children }: IRouterContextProps) {
  const { authenticated, loading, handleLogin, handleLogout, use } = useAuth();

  const { product, handleProduct, categoria } = useProduct();

  const { cart, handleCart, handleRemoveCart } = useCart();

  return (
    <Context.Provider
      value={{
        loading,
        authenticated,
        handleLogin,
        handleLogout,
        use,
        product,
        handleProduct,
        cart,
        handleCart,
        handleRemoveCart,
        categoria
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
