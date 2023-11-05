import { useContext } from "react";
import { AuthContext } from "../components/auth/context/AuthContext";
import { Navigate } from "react-router-dom";

export const SuperUserRouter = ({ children }) => {

    const { logged, user } = useContext(AuthContext);

    if (!logged) {
        
        return <Navigate to='/login' />

    } else {

        return (user.role === 'Administrador') ? children : <Navigate to='/' />
    }
}
