import { createContext, useState, useEffect, ReactNode } from "react";

import useAuth from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import useProduct from "../hooks/useProduct";
import { PropsProduct } from "../interfaces/Product";
import { User } from "../interfaces/User";
interface IRouterContextProps {
  children: ReactNode;
}


interface PropsLoginUser {
  email: string;
  password: string;
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
  handleCart: (data?: PropsProduct) => void;
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
