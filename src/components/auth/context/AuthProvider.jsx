import { useState } from "react";
import { AuthContext } from "./AuthContext";


const init = () => {

    const user = JSON.parse(localStorage.getItem('user'));  // obtiene el user que está en locaStorage.

    return {
        logged: !!user,
        user: user
    }
}


export const AuthProvider = ({ children }) => {

    const [authState, setAuthState] = useState(init);

    const login = (user) => {

        localStorage.setItem('user', JSON.stringify(user));
        setAuthState({
            logged: true,
            user: user
        });
    }

    const logout = () => {

        localStorage.removeItem('user');
        setAuthState({
            logged: false,
        });
    }

    return (

        <AuthContext.Provider value={{
            user: authState.user,
            logged: authState.logged,
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}


