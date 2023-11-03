import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../../components/auth/LoginPage";
import { ResetPassword } from "../../components/auth/ResetPassword";


export const LogoutRoutes = () => {

    return (

        <>
            <Routes>
                <Route exact path="/login" element={<LoginPage />}></Route>
                <Route exact path="/restablecer_contrasena" element={<ResetPassword />}></Route>
            </Routes>
        </>

    )
}
