import React from 'react'
import { Routes, Route } from 'react-router-dom';  
import { NewsDetail } from '../components/news/NewsDetail';
import Formulario from '../Formulario';
import { Home } from '../Home';
import { Comunicados,CulturaTurismo,Deporte, Historia, PuntoDigital } from '../pages';
export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Home/>} ></Route>
            <Route exact path="/comunicados" element={<Comunicados/>} ></Route>
            <Route exact path="/deportes" element={<Deporte/>} ></Route>
            <Route exact path="/culturaTurismo" element={<CulturaTurismo/>} ></Route>
            <Route exact path="/historia" element={<Historia/>} ></Route>
            <Route exact path="/puntoDigital" element={<PuntoDigital/>} ></Route> 
            <Route exact path="/formulario" element={<Formulario />} ></Route>
            <Route exact path="/noticias/1" element={<NewsDetail />} ></Route>           
        </Routes> 
    </>
  )
}
