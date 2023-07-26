/* componente encargado de mostrar cada botón*/

import { NavLink} from 'react-router-dom';

const ButtonSquare = ({ icon, title, url, id=null }) => {
  return (

    <NavLink className={({ isActive }) => `${isActive ? 'link-activated' : 'link-btn-square'}`} to={url} id={id}>
      <div  >
        <h6 className="btn-square-text"  id={id} >
        <div className="btn-square-icon" id={id}>
          {icon}
        </div>
          {title}
        </h6>
      </div>
    </NavLink>
  )
}

export default ButtonSquare
