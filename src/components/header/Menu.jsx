import React, { useState } from 'react';
import './Menu.css';

import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export const Menu = () => {

    const [open, setOpen] = useState(false);
    const [shouldCloseMenu, setShouldCloseMenu] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const handleLinkClick = () => {
        setOpen(!open);
    }

    const handleBlur = (e) => {
        const { currentTarget, relatedTarget } = e;

        if (currentTarget.contains(relatedTarget)) {
            setShouldCloseMenu(false);
        } else {
            setShouldCloseMenu(true);
            setOpen(false);
        }
    }

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
                    </ul>
                </div>
            </div>
        </>
    )
}

