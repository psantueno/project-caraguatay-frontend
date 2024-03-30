import { Button, Container, Nav, Navbar, NavDropdown, Col, Row } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import MunicipioLogo from '../../assets/caraguatay-03.png';
import { MenuProfile } from './MenuProfile';
import { Link } from 'react-router-dom';
import { useHamburguer } from './hooks/useHamburguer';

export const NavMenu = () => {
    const { user, logged, logout, login } = useContext(AuthContext);



    const dropdownUser = logged ? (
        <>
            <Col>
                <MenuProfile avatar={user.avatar} firstName={user.name} />

            </Col>
        </>
    ) : (
        <Link to="/login"><i className="fas fa-user"></i></Link>
    );

    const onLogout = () => {
        logout();

    }

    const onLogin = () => {
        login();

    }

    const detalleUser = "/admin/usuarios/datalle-usuario"

    return (
        <Container fluid>
            <Navbar expand="lg" className="nav-css">

                <Navbar.Brand href="/">
                    <img src={MunicipioLogo} className="logo-header" />
                </Navbar.Brand>



                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll" className="navbarScroll-css" >
                    <Col>
                        <div className="esconde-en-desktop">
                            <Nav>
                                <Nav.Item className='user-navbar-box user-navbar-box-flecha '> {dropdownUser}</Nav.Item>

                                <Nav.Link href={detalleUser} style={logged && user.role === 'administrador' ? { display: "Block" } : { display: "none" }}>
                                    Mis Datos
                                </Nav.Link>
                                <Nav.Link href={logged && user.role === 'administrador' ? "/super-admin/usuarios" : "/login"}
                                    style={logged && user.role === 'administrador' ? { display: "Block" } : { display: "none" }}>
                                    Admin Usuarios </Nav.Link>

                                <Nav.Link href={logged && (user.role === 'administrador' || user.role === 'colaborador') ? "/admin/noticias" : "/login"}
                                    style={logged && user.role === 'administrador' ? { display: "Block" } : { display: "none" }}>
                                    Admin Noticias
                                </Nav.Link>
                                <Nav.Link>
                                    {logged && (user.role === 'administrador' || user.role === 'colaborador')

                                        &&

                                        <button className='button-logout' onClick={logged && (user.role === 'administrador' || user.role === 'colaborador') ? onLogout : onLogin}>Cerrar Sesión  <i className="fas fa-sign-out-alt"></i> </button>

                                    }
                                </Nav.Link>
                            </Nav>
                        </div>

                        <div className="esconde-en-movil">
                            <NavDropdown title={dropdownUser} id="nav-dropdown" className='user-navbar-box user-navbar-box-flecha '>
                                {logged && user.role === 'administrador' && (
                                    <>
                                        <NavDropdown.Item href={detalleUser}>Mis Datos</NavDropdown.Item>
                                        <NavDropdown.Item href="/super-admin/usuarios">Admin Usuarios</NavDropdown.Item>
                                        <NavDropdown.Item href="/admin/noticias">Admin Noticias</NavDropdown.Item>
                                        <NavDropdown.Item onClick={onLogout}> Cerrar Sesión <i className="fas fa-sign-out-alt"></i>
                                        </NavDropdown.Item>
                                    </>
                                )}

                                {!logged && (
                                    <NavDropdown.Item  >
                                       
                                        <Link to="/login" className='navbar-header' > Iniciar Sesión </Link>
                                    </NavDropdown.Item>
                                )}
                            </NavDropdown>
                        </div>
                    </Col>

                    <Col>
                        <Nav
                            className=" my-2 my-lg-0 navbar-header-xxl"

                            // style={{ maxHeight: '1300px',alignItems:"end", display:'flex', flexDirection:'Column', textAlignLast: "end"  }}
                            navbarScroll
                        >


                            {/* <Col> */}
                            <Nav.Link href="/comunicados">Comunicados</Nav.Link>
                            <Nav.Link href="/cultura-y-turismo">Cultura y Turismo</Nav.Link>
                            <Link to="/deportes" className="nav-link">Deportes</Link>
                            <Nav.Link href="/historia">Historia</Nav.Link>
                            <Nav.Link href="/punto-digital">Punto Digital</Nav.Link>


                            {/* </Col> */}




                        </Nav>
                    </Col>
                </Navbar.Collapse>


            </Navbar>
        </Container>
    );
}

// 