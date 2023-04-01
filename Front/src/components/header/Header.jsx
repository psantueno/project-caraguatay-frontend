import { Link } from 'react-router-dom';
import { MenuHamburguer } from './MenuHamburguer'
import MunicipioLogo from '../../assets/caraguatay-03.png';



export const Header = () => {
  return (
    <>
      <div className='main-div-header'>
        <div>
          <Link to="/login">
            <i className="fas fa-user"></i>
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={MunicipioLogo} className="logo-header" />
          </Link>
        </div>
        <div>
          <MenuHamburguer />
        </div>
      </div>
    </>
  )
}
