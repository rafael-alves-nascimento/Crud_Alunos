import React from "react";
import Logar from "../Componentes/Login/Logar";
import Cadastro from "../Componentes/Cadastro/Cadastro";
import MostrarAlunos from "../Componentes/Alunos/Mostrar"
import {BrowserRouter, Routes, Route} from "react-router-dom";


export default function Rotas() {
    return (
      <div className="rotas">
        <BrowserRouter >
          <Routes>
           <Route path='/' element={<Logar/>} /> 
           <Route path="/mostrar" element={< MostrarAlunos />} /> 
            <Route path='/Cadastro' element={<Cadastro/>} />
            <Route path="/Logar"  element={<Logar/>} /> 
          </Routes>
        </BrowserRouter>
      </div>
    );
  }