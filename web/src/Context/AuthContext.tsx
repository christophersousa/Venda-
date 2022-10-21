import { createContext, useState, useEffect, ReactNode } from 'react';

import useAuth from '../hooks/useAuth';
interface IRouterContextProps{
    children: ReactNode,
}
interface ProposContext {
    loading: boolean;
    authenticated: boolean;
    handleLogin: () => Promise<void>;
    handleLogout: () => void;
}

const Context = createContext({} as ProposContext);

function AuthProvider({ children }: IRouterContextProps) {
  const {
    authenticated, loading, handleLogin, handleLogout,
  } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };