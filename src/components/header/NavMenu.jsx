import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import Form from 'react-bootstrap/Form';
import { MenuHamburguer } from './MenuHamburguer'
import MunicipioLogo from '../../assets/caraguatay-03.png';
import { MenuProfile } from './MenuProfile';
import { Link } from 'react-router-dom';
import { useHamburguer } from './hooks/useHamburguer';

export const NavMenu = () => {
    const { user, logged , logout} = useContext(AuthContext);
    const { open, handleClick, handleLinkClick, handleBlur } = useHamburguer({})
    

    const firstName = user ? user.name.split(' ')[0] : '';         // Selecciona solo el primer nombre.
    const lastNameInitial = user ? user.lastName.charAt(0) : '';  // Abrevia el apellido a la inicial seguido de un punto.
   
    const dropdownUser = logged ? (
        <>
        <div>

            <MenuProfile avatar={user.avatar} />
            <div className='user-name-navbar'>{firstName} {lastNameInitial}</div>
        </div>
        </>
    ) : (
        <Link to="/login"><i className="fas fa-user"></i></Link>
    );

    const onLogout = () => {
        console.log("entranding");
        logout();
        navigate('/login')
    }

    const detalleUser= "/admin/usuarios/datalle-usuario"

    return (
        <Container fluid>
            <Navbar expand="lg" className="nav-css">

            

                <Navbar.Brand href="/">
                    <img src={MunicipioLogo} className="logo-header" />
                </Navbar.Brand>
                
              

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="navbarScroll-css" style={{ alignItems:"baseline", justifyContent:"space-around", fontSize:"20px"}}>
                    <Nav
                        className=" my-2 my-lg-0"
                        style={{ maxHeight: '1300px',alignItems:"baseline"}}
                        navbarScroll
                    >
                       
                        <Nav.Link href="/comunicados">Comunicados</Nav.Link>
                        <Nav.Link href="/cultura-y-turismo">Cultura y Turismo</Nav.Link>
                        <Link to="/deportes" className="nav-link">Deportes</Link>
                        <Nav.Link href="/historia">Historia</Nav.Link>
                        <Nav.Link href="/punto-digital">Punto Digital</Nav.Link>
                        
                        {/* {logged && <li><Nav.Link to="/admin/noticias" onClick={handleLinkClick}>Abm Noticias</Nav.Link></li>}
                        {logged && user.role === 'Administrador' && <li><Nav.Link to="/super-admin/usuarios" onClick={handleLinkClick}>Abm Usuarios</Nav.Link></li>} */}

                        <NavDropdown id="collapsible-nav-dropdown" className='user-navbar-box' title={dropdownUser}>
                            <NavDropdown.Item href={detalleUser}>Mis Datos</NavDropdown.Item>
                            <NavDropdown.Item >
                            <button className='button-logout' onClick={onLogout}>Cerrar Sesión <i className="fas fa-sign-out-alt"></i></button>
                            </NavDropdown.Item>
                            <NavDropdown.Item href={logged && user.role === 'Administrador' ? "/super-admin/usuarios" : "/login"}>
                                Admin Usuarios

                            </NavDropdown.Item>
                            <NavDropdown.Item href={logged && (user.role === 'Administrador' || user.role === 'colaborador') ? "/admin/noticias" : "/login"}>
                                Admin Noticias
                            </NavDropdown.Item>
                        </NavDropdown>
                        
                    </Nav>
                </Navbar.Collapse>
                {/* <Navbar.Collapse>
                <Nav>

                <div className='user-navbar-box'>
                    {
                        logged

                            ? <MenuProfile avatar={user.avatar} />
                            : <Link to="/login"><i className="fas fa-user"></i></Link>
                    }
                    {
                        logged

                            ? (<div className='user-name-navbar'>{firstName} {lastNameInitial}

                            </div>)
                            : null
                    }
                </div>
                </Nav>
                </Navbar.Collapse> */}

            </Navbar>
        </Container>
    );
}

