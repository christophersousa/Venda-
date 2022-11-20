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
  id: number;
  nome: string;
  descricao: string;
  precoAnterior: number;
  preco: number;
  marca: string;
  fotos: string[];
}

interface ProposContext {
  use: User | null | undefined;
  loading: boolean;
  authenticated: boolean;
  handleLogin: (data: PropsLoginUser) => Promise<void>;
  handleLogout: () => void;
  handleProduct: (product: PropsProduct) => void;
  product: PropsProduct;
  cart: PropsProduct[];
  handleCart: (data?: PropsProduct, fotos?: string[]) => void;
}

const Context = createContext({} as ProposContext);

function AuthProvider({ children }: IRouterContextProps) {
  const { authenticated, loading, handleLogin, handleLogout, use } = useAuth();

  const { product, handleProduct } = useProduct();

  const { cart, handleCart } = useCart();

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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
