import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useHamburguer } from './hooks/useHamburguer';

import { useContext } from 'react';
import {Nav} from 'react-bootstrap'

import { AuthContext } from '../auth/context/AuthContext';


export const MenuProfile = ({ avatar}) => {

    const { open, handleClick, handleLinkClick, handleBlur } = useHamburguer({})
    const { user, logged } = useContext(AuthContext);
 
    const { logout } = useContext( AuthContext )

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
                        {/* <li> { logged &&  <li><Link to="/admin/noticias" onClick={handleLinkClick}>ABM NOTICIAS</Link></li> }</li> 
                        <li> { logged && user.role === 'Administrador' &&  <li><Link to="/super-admin/usuarios" onClick={handleLinkClick}>ABM USUARIOS</Link></li> } </li>                   */}
                    </ul>
                </div>
            </div>
        </>

    )
}


