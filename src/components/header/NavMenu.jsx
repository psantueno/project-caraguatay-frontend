import { Button, Container, Nav, Navbar, NavDropdown , Col, Row} from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import Form from 'react-bootstrap/Form';
import { MenuHamburguer } from './MenuHamburguer'
import MunicipioLogo from '../../assets/caraguatay-03.png';
import { MenuProfile } from './MenuProfile';
import { Link } from 'react-router-dom';
import { useHamburguer } from './hooks/useHamburguer';

export const NavMenu = () => {
    const { user, logged , logout, login} = useContext(AuthContext);
    const { open, handleClick, handleLinkClick, handleBlur } = useHamburguer({})
    

   
    const dropdownUser = logged ? (
        <>
        <div>
            <MenuProfile avatar={user.avatar}  firstName={user.name}/>
    
        </div>
        </>
    ) : (
        <Link to="/login"><i className="fas fa-user"></i></Link>
    );

    const onLogout = () => {
        logout();
       
    }

    const onLogin =() => {
        login();

    }

    const detalleUser= "/admin/usuarios/datalle-usuario"

    return (
        <Container fluid>
            <Navbar expand="lg" className="nav-css">

            

                <Navbar.Brand href="/">
                    <img src={MunicipioLogo} className="logo-header" />
                </Navbar.Brand>
                
              

                <Navbar.Toggle aria-controls="navbarScroll" />
                   
                <Navbar.Collapse id="navbarScroll" className="navbarScroll-css" >
                        <Col>
                        <Nav>
                        <Nav.Item className='user-navbar-box user-navbar-box-flecha '> {dropdownUser}</Nav.Item>

                        <Nav.Link href={detalleUser}  style={logged && user.role === 'administrador' ? {display:"Block"}: {display:"none"}}> 
                            Mis Datos

                        </Nav.Link>
                        <Nav.Link href={logged && user.role === 'administrador' ? "/super-admin/usuarios" : "/login"} 
                                style={logged && user.role === 'administrador' ? {display:"Block"}: {display:"none"}}>
                            Admin Usuarios </Nav.Link>

                        <Nav.Link href={logged && (user.role === 'administrador' || user.role === 'colaborador') ? "/admin/noticias" : "/login"}
                                style={logged && user.role === 'administrador' ? {display:"Block"}: {display:"none"}}>
                            Admin Noticias
                        
                        </Nav.Link>         
                        <Nav.Link>
                        {logged && (user.role === 'administrador' || user.role === 'colaborador') 
                            
                            &&  
                                
                            <button className='button-logout' onClick={logged && (user.role === 'administrador' || user.role === 'colaborador') ? onLogout: onLogin}>Cerrar Sesión  <i className="fas fa-sign-out-alt"></i> </button>
                                                                         
                            }    
                        </Nav.Link>                       
                    </Nav>

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

// 