import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import api from '../api/api.js';

interface PorxyDataLogin{
    data: {
        email: string;
        password: string;
    }
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token? 'login': 'logout');
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  async function handleLogin() {
    const { data: { token } } = await api.post('/authenticate');
    localStorage.setItem('token', JSON.stringify(token));
    console.log(token);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = '';
    <Navigate to="/login"/>
  }

  return { authenticated, loading, handleLogin, handleLogout, setAuthenticated};
}