import { Route, Routes } from "react-router-dom";
import { DetailUser } from "../../components/admin-users/DetailUser";
import { NewsAdmin } from "../../pages/NewsAdmin";
import { CreateNewsForm } from "../../components/news/CreateNewsForm";
import { EditNewsForm } from "../../components/news/EditNewsForm";
import { Error404 } from "../../pages/Error404";



export const AdminRoutes = () => {

    return (

        <>
            <Routes>
                <Route exact path="/usuarios/datalle-usuario" element={<DetailUser />} ></Route>
                <Route exact path="/noticias" element={<NewsAdmin />} ></Route>
                <Route exact path="/noticias/crear-noticia" element={<CreateNewsForm />} ></Route>
                <Route exact path="/noticias/editar-noticia/:id" element={<EditNewsForm />} ></Route>

                {/* Ruta no encontrada - 404 NOT FOUND */}
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>

    )
}

