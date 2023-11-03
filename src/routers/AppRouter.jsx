import { Routes, Route } from 'react-router-dom';
import { LogoutRouter, SuperUserRouter, PrivateRouter } from '../routers';
import { AdminRoutes } from './routes/AdminRoutes';
import { SuperAdminRoutes } from './routes/SuperAdminRoutes';
import { LogoutRoutes } from './routes/LogoutRoutes';
import { Comunicados, CulturaTurismo, Deportes, Historia, PuntoDigital, Home } from '../pages';
import { NewsDetail } from '../components/news/NewsDetail';


export const AppRouter = () => {

  return (

    <>
      <Routes>

        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/comunicados" element={<Comunicados />} ></Route>
        <Route exact path="/comunicados/:id" element={<NewsDetail />} ></Route>
        <Route exact path="/deportes" element={<Deportes />} ></Route>
        <Route exact path="/deportes/:id" element={<NewsDetail />} ></Route>
        <Route exact path="/historia/*" element={<Historia />} ></Route>
        <Route exact path="/noticias/:id" element={<NewsDetail />} ></Route>
        <Route exact path="/cultura-y-turismo/*" element={<CulturaTurismo />}></Route>
        <Route exact path="/punto-digital/*" element={<PuntoDigital />} ></Route>


        {/* Rutas exclusivas para visitantes (no logueados) */}
        <Route exact path='/*' element={
          <LogoutRouter >
            <LogoutRoutes />
          </LogoutRouter>
        } />

        {/* Rutas exclusivas para SUPERUSER ---> ROL = ADMINISTRADOR */}
        <Route path='/super-admin/*' element={
          <SuperUserRouter>
            <SuperAdminRoutes />
          </SuperUserRouter>
        } />

        {/* Rutas exclusivas para usuarios logueados ---> ROL = COLABORADOR */}
        <Route exact path='/admin/*' element={
          <PrivateRouter >
            <AdminRoutes />
          </PrivateRouter>
        } />

      </Routes>
    </>
  )
}


// Terminar de ocultar iconos de edicion y opciones en los menu del header
