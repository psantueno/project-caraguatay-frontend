import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Link } from 'react-router-dom';
import { MenuHamburguer } from './MenuHamburguer'
import MunicipioLogo from '../../assets/caraguatay-03.png';
import { MenuProfile } from './MenuProfile';
import { NavMenu } from './NavMenu';




export const Header = () => {

  const { user, logged } = useContext( AuthContext );

  const firstName = user ? user.name.split(' ')[0] : '';         // Selecciona solo el primer nombre.
  const lastNameInitial = user ? user.lastName.charAt(0) : '';  // Abrevia el apellido a la inicial seguido de un punto.


  return (
    <>
      <div className='main-div-header'>
        <div className='user-navbar-box'>
          {/* {
            logged

              ? <MenuProfile avatar={user.avatar} />
              : <Link to="/login"><i className="fas fa-user"></i></Link>
          }
          {
            logged

              ? (<div className='user-name-navbar'>{firstName} {lastNameInitial}.</div>)
              : null
          } */}
        </div>
        <div>
          {/* <Link to="/">
            <img src={MunicipioLogo} className="logo-header" />
          </Link> */}
        </div>
        <div>
          {/* <MenuHamburguer /> */}
          <NavMenu />
        </div>
      </div>
    </>
  )
}
