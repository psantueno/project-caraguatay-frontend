import { Routes, Route} from 'react-router-dom';
import { NewsDetail } from '../components/news/NewsDetail';
import { CreateNewsForm } from '../components/news/CreateNewsForm';

import { Comunicados, CulturaTurismo, Deportes, Historia, PuntoDigital, UserAdmin } from '../pages';
import { Home } from '../pages/Home';
import { LoginPage } from '../components/auth/LoginPage';
import { ResetPassword } from '../components/auth/ResetPassword';
import { NewsAdmin } from '../pages/NewsAdmin';
import { EditNewsForm } from '../components/news/EditNewsForm';


export const AppRouter = () => {
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} ></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/restablecer_contrasena" element={<ResetPassword/>}></Route>
        <Route exact path="/comunicados" element={<Comunicados />} ></Route>
        <Route exact path="/deportes" element={<Deportes />} ></Route>
        <Route exact path="cultura-turismo/*" element={<CulturaTurismo />}></Route>
        <Route exact path="/historia/*" element={<Historia />} ></Route>
        <Route exact path="/punto-digital/*" element={<PuntoDigital />} ></Route>
        <Route exact path="/noticias/:id" element={<NewsDetail />} ></Route>
        <Route exact path="/admin/usuarios" element={<UserAdmin />} ></Route>
        <Route exact path="/admin/noticias" element={<NewsAdmin />} ></Route>
        <Route exact path="/admin/noticias/crear-noticia" element={<CreateNewsForm />} ></Route>
        <Route exact path="/admin/noticias/editar-noticia/:id" element={<EditNewsForm />} ></Route>

      </Routes>
    </>
  )
}
