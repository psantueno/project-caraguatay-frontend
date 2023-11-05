import { Link } from 'react-router-dom';
import { useHamburguer } from './hooks/useHamburguer';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';


export const MenuHamburguer = () => {

    const { open, handleClick, handleLinkClick, handleBlur } = useHamburguer({})

    const { user, logged } = useContext(AuthContext);

    return (
        <>
            <div className="navbar-hamburguer" onBlur={handleBlur} >
                <button className={`navbar-hamburguer-toggler ${open ? 'open' : ''}`} onClick={handleClick}>
                    <div className="navbar-hamburguer-toggler-line"></div>
                    <div className="navbar-hamburguer-toggler-line"></div>
                    <div className="navbar-hamburguer-toggler-line"></div>
                </button>
                <div className={`navbar-collapse-hamburguer ${open ? 'open' : ''}`}>
                    <ul className={`container-links-header ${open ? 'open' : ''}`}>
                        <li><Link to="/comunicados" onClick={handleLinkClick}>COMUNICADOS</Link></li>
                        <li><Link to="/cultura-y-turismo" onClick={handleLinkClick}>CULTURA Y TURISMO</Link></li>
                        <li><Link to="/deportes" onClick={handleLinkClick}>DEPORTES</Link></li>
                        <li><Link to="/historia" onClick={handleLinkClick}>HISTORIA</Link></li>
                        <li><Link to="/punto-digital" onClick={handleLinkClick}>PUNTO DIGITAL</Link></li>
                        { logged &&  <li><Link to="/admin/noticias" onClick={handleLinkClick}>ADMIN NOTICIAS</Link></li> }
                        { logged && user.role === 'Administrador' &&  <li><Link to="/super-admin/usuarios" onClick={handleLinkClick}>ADMIN USUARIOS</Link></li> }
                       
                    </ul>
                </div>
            </div>
        </>
    )
}

