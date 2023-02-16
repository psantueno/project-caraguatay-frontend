/* componente encargado de mostrar cada botón*/

import { NavLink} from 'react-router-dom';

const ButtonSquare = ({ icon, title, url, id }) => {
  return (

    <NavLink className={({ isActive }) => `${isActive ? 'link-activated' : 'link-btn-square'}`} to={url} >
      <div id={id}  >
        <div className="btn-square-icon">
          {icon}
        </div>
        <h6 className="btn-square-text"  id={id} >{title}</h6>
      </div>
    </NavLink>
  )
}

export default ButtonSquare
