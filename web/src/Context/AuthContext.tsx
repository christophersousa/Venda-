import { createContext, useState, useEffect, ReactNode } from 'react';

import useAuth from '../hooks/useAuth';
interface IRouterContextProps{
    children: ReactNode,
}

interface User{
  id: number,
  name: string,
  company: string,
  website: string,
}

interface ProposContext {
    use: User|null|undefined
    loading: boolean;
    authenticated: boolean;
    handleLogin: () => Promise<void>;
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