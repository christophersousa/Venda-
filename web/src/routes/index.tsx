import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Cadastro } from '../page/Cadastro';
import {Home} from '../page/Home'
import { Login } from '../page/Login';


export const RoutesPage = () => (
  <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/cadastro" element={<Cadastro/>} />
  </Routes>
);