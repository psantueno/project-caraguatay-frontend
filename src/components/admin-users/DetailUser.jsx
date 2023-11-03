import { AuthContext } from "../auth/context/AuthContext"
import { useContext } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';


export const DetailUser = () => {

    const { user } = useContext(AuthContext)

    const navigate = useNavigate();

    return (

        <>

            <h1 className="form-title mt-4" style={{ color: '#315C94' }}>DETALLE DEL USUARIO</h1>
            <p className="form-title mt-4">Dirección de e-mail:</p>
            {user && <p>{user?.email}</p>}
            <p className="form-title mt-4">Nombre:</p>
            {user && <p>{user?.name}</p>}
            <p className="form-title mt-4">Apellido:</p>
            {user && <p>{user?.lastName}</p>}
            <p className="form-title mt-4">Rol:</p>
            {user && <p>{user?.role}</p>}
            <p className="form-title mt-4">Imagen:</p>
            {user && <img src={user?.avatar} alt="" className="avatarInDisplay" />}

            <div style={{ textAlign: 'center', marginTop:'25px' }}>
                <Button onClick={() => navigate("/")} >
                    Volver al inicio
                </Button>
            </div>

        </>
    )
}

