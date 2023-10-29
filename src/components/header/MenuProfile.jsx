import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useHamburguer } from './hooks/useHamburguer';
import { AuthContext } from '../auth/context/AuthContext';
import { useContext } from 'react';


export const MenuProfile = ({ avatar}) => {

    const { logout } = useContext( AuthContext )

    const { open, handleClick, handleLinkClick, handleBlur } = useHamburguer({});

    const navigate = useNavigate();

    const onLogout = () => {
        console.log("entranding");
        logout();
        navigate('/login')
    }


    return (
        <>
            <div className="navbar-hamburguer" onBlur={handleBlur}>
                <button className={`navbar-hamburguer-user-toggler ${open ? 'open' : ''}`} onClick={handleClick}>
                    <div className="d-flex align-items-center" onClick={handleClick}>
                        <i className="fas fa-caret-down" style={{ marginRight: '4px', color: "#315C94" }}></i>
                        <img src={avatar} alt="" className="avatar-in-navbar" />
                    </div>
                </button>
                <div className={`navbar-collapse-hamburguer ${open ? 'open' : ''}`} >
                    <ul className={`container-links-userProfile ${open ? 'open' : ''}`}>
                        <li><Link to="/admin/usuarios/datalle-usuario" onClick={handleLinkClick}>MIS DATOS</Link></li>
                        <li><button className='button-logout' onClick={onLogout}>CERRAR SESIÓN <i className="fas fa-sign-out-alt"></i></button></li>
                    </ul>
                </div>
            </div>
        </>

    )
}


