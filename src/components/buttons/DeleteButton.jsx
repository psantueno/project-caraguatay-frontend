import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import './buttons.css';


export const DeleteButton = ({fx=null, arg=null}) => {

  const { logged } = useContext( AuthContext )

  return (
      <button onClick={ () => fx(arg) } className='admin-button' type="button" title='Eliminar' disabled={!logged}>
        <i className="fas fa-trash-alt"></i>
      </button>  
  )
}

/* fx= es la prop que recibe funciones especificas para que el boton ejecute.

   arg= es la prop que recibe cualquier argumento/variable/valor que querramos que reciba el botón.

*/


