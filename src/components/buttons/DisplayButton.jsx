import React from 'react';
import './buttons.css';

export const DisplayButton = ({fx=null, arg=null}) => {
  return (
      <button onClick={ () => fx(arg) } className='admin-button' type="button">
        <i className="fas fa-eye"></i>
      </button>  
  )
}


/* fx= es la prop que recibe funciones especificas para que el boton ejecute.

   arg= es la prop que recibe cualquier argumento/variable/valor que querramos que reciba el botón.

*/

