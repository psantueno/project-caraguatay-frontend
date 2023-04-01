import React from 'react';
import './buttons.css';

export const EditButton = ({fx=null, arg=null}) => {
  return (
      <button className='admin-button'onClick={ () => fx(arg) } type="button" title='Editar'>
       <i className="fas fa-pen"></i>
      </button>  
  )
}




