import { Link } from 'react-router-dom';
import { Menu } from './Menu'
import MunicipioLogo from '../../assets/caraguatay-03.png';
import UserAvatar from '../../assets/user-header-48px.png';
import './Header.css'


export const Header = () => {
  return (
    <>
      <div className='main-div-header'>
        <div>
          <Link to="/login">
            <img className="btns-header" src={UserAvatar} />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src={MunicipioLogo} className="escudo" />
          </Link>
        </div>
        <div>
          <Menu />
        </div>
      </div>
    </>
  )
}
