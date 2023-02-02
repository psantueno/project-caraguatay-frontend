import React from 'react';
import {Row, Container} from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';


export const Historia = () => {
  return (
    <>
    <Container style={{textAlign:'cente'}}>

        <h3 className='main-div'> Historia </h3>
      
        <Row className='mb-5'>

          
            <ButtonSquareList/>
        
        </Row>

       

     
    
    </Container>


    
    </>
  )
}
