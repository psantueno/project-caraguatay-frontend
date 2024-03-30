import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useHamburguer } from './hooks/useHamburguer';

import { useContext } from 'react';
import { Col , Row} from 'react-bootstrap'

import { AuthContext } from '../auth/context/AuthContext';


export const MenuProfile = ({ avatar, name }) => {

    const { open, handleClick, handleLinkClick, handleBlur } = useHamburguer({})
    const { user, logged } = useContext(AuthContext);

    const { logout } = useContext(AuthContext)

    const navigate = useNavigate();

    const onLogout = () => {
        console.log("entranding");
        logout();
        navigate('/login')
    }

    const firstName = user ? user.name.split(' ')[0] : '';         // Selecciona solo el primer nombre.
    // const lastNameInitial = user ? user.lastName.charAt(0) : '';  // Abrevia el apellido a la inicial seguido de un punto.


    return (
        
        <Col>
            <Col className="d-flex align-items-center" onClick={handleClick}>
                <div className="navbar-hamburguer" onBlur={handleBlur}>
                    <button className={`navbar-hamburguer-user-toggler ${open ? 'open' : ''}`} onClick={handleClick}>
                        <img src={avatar} alt="" className="avatar-in-navbar" />
                    </button>
                </div>
            </Col>
        <Col className='user-name-navbar'>
        {firstName} 
    </Col>
        </Col>

    )
}


