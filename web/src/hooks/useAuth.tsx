import { useState, useEffect } from 'react';
import { decodeToken } from 'react-jwt';
import { Navigate } from 'react-router-dom';

import api from '../api/api.js';



interface User{
    id: number,
    name: string,
    company: string,
    website: string,
}

export default function useAuth() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [use, setUse] = useState<User|null>();

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token? 'login': 'logout');
        if (token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
            const tokenUser:User|null = decodeToken(token)
            setUse(tokenUser);
            console.log("usuario ", use?.name);
        }
        setLoading(false);
    }, []);

    async function handleLogin() {
        const { data: { token } } = await api.post('/authenticate');
        localStorage.setItem('token', JSON.stringify(token));

        const tokenUser:User|null = decodeToken(token)
        setUse(tokenUser);
        console.log("usuario ", use?.name);

        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = '';
        <Navigate to="/login"/>
    }

    return { authenticated, loading, handleLogin, handleLogout, setAuthenticated, use};
}