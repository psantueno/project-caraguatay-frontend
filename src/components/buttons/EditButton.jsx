import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import React from 'react';
import './buttons.css';

export const EditButton = ({fx=null, arg=null}) => {

  const { logged } = useContext( AuthContext )

  return (
      <button className='admin-button'onClick={ () => fx(arg) } type="button" title='Editar' disabled={!logged}>
       <i className="fas fa-pen"></i>
      </button>  
  )
}




