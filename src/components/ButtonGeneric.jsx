import React from 'react'
import '../../src/index.css'
import {Button} from 'react-bootstrap'


export const ButtonGeneric = ({text}) => {

    
  return (

   <Button className='btn' variant='outline-info'>{text}</Button>
  
   )
}
