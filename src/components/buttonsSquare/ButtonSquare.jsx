/* componente encargado de mostrar cada botón*/

import { NavLink} from 'react-router-dom';

const ButtonSquare = ({ icon, title, url }) => {
  return (

    <NavLink className={({ isActive }) => `${isActive ? 'link-activated' : 'link-btn-square'}`} to={url}>
      <div >
        <div className="btn-square-icon">
          {icon}
        </div>
        <h6 className="btn-square-text" >{title}</h6>
      </div>
    </NavLink>
  )
}

export default ButtonSquare
