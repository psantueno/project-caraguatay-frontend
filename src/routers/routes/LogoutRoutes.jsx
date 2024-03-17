import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../components/auth/LoginPage";
import { ResetPassword } from "../../components/auth/ResetPassword";
import { Error404 } from "../../pages/Error404";


export const LogoutRoutes = () => {

    return (

        <>
            <Routes>
                <Route exact path="/login" element={<LoginPage />}></Route>
                <Route exact path="/restablecer_contrasena" element={<ResetPassword />}></Route>

                {/* Ruta no encontrada - 404 NOT FOUND */}
                <Route path='*' element={<Error404 />} />
            </Routes>
        </>

    )
}
