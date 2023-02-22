/* componente encargado de mostrar cada botón*/

import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const ButtonNoUrl = ({ icon, title, id = null, onClick, isActive }) => {

  const handleClick = () => {
    onClick(id);
  };

  const className = isActive ? 'link-activated' : 'link-btn-square';



  return (

    <div className={className} onClick={handleClick} id={id}>


      <div  >
        <h6 className="btn-square-text" id={id} >
          <div className="btn-square-icon" id={id}>
            {icon}
          </div>
          {title}
        </h6>
      </div>
    </div>
  )
}

export default ButtonNoUrl

