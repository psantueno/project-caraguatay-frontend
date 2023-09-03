import { Link } from 'react-router-dom';
import { useHamburguer } from './hooks/useHamburguer';


export const MenuHamburguer = () => {

    const { open, handleClick, handleLinkClick, handleBlur } = useHamburguer({})

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
                        <li><Link to="/cultura-turismo" onClick={handleLinkClick}>CULTURA Y TURISMO</Link></li>
                        <li><Link to="/deportes" onClick={handleLinkClick}>DEPORTES</Link></li>
                        <li><Link to="/historia" onClick={handleLinkClick}>HISTORIA</Link></li>
                        <li><Link to="/punto-digital" onClick={handleLinkClick}>PUNTO DIGITAL</Link></li>
                        <li><Link to="/admin/noticias" onClick={handleLinkClick}>ADMIN NOTICIAS</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

