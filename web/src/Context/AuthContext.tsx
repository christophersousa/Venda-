import { createContext, useState, useEffect, ReactNode } from 'react';

import useAuth from '../hooks/useAuth';
interface IRouterContextProps{
    children: ReactNode,
}

interface User{
  id: number,
  nome: string,
  email: string,
  token: string,
  status: string,
}

interface PropsLoginUser{
  email: string;
  password: string;
}

interface ProposContext {
    use: User|null|undefined
    loading: boolean;
    authenticated: boolean;
    handleLogin: (data:PropsLoginUser) => Promise<void>;
    handleLogout: () => void;
}

const Context = createContext({} as ProposContext);

function AuthProvider({ children }: IRouterContextProps) {
  const {
    authenticated, loading, handleLogin, handleLogout, use
  } = useAuth();

  return (
    <Context.Provider value={{
      loading,
      authenticated,
      handleLogin,
      handleLogout,
      use
      }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };