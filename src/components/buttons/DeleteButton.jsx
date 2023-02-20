import './buttons.css';


export const DeleteButton = ({fx=null, arg=null}) => {
  return (
      <button onClick={ () => fx(arg) } className='admin-button' type="button">
        <i className="fas fa-trash-alt"></i>
      </button>  
  )
}

<<<<<<< HEAD
 
=======
/* fx= es la prop que recibe funciones especificas para que el boton ejecute.

   arg= es la prop que recibe cualquier argumento/variable/valor que querramos que reciba el botón.

*/
>>>>>>> 5621bae086ed27ea94d7e02d76149494848a7722


