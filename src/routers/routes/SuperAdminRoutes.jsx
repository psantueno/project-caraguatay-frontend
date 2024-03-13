import { Route, Routes } from 'react-router-dom';
import { UserAdmin } from '../../pages';
import { Error404 } from '../../pages/Error404';


export const SuperAdminRoutes = () => {

    return (
        <>
            <Routes>
                <Route exact path="/usuarios" element={<UserAdmin />} ></Route>

                {/* Ruta no encontrada - 404 NOT FOUND */}
                <Route path='*' element={<Error404 />} />
            </Routes>

        </>
    )
}
