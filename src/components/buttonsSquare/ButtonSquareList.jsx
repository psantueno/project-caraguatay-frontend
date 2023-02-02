import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ButtonGroup, ButtonToolbar, Container, Button } from 'react-bootstrap';
import ButtonSquare from './ButtonSquare';
import { Shield } from '../history/Shield';
import { History } from '../history/History';
import { Flag } from '../history/Flag';
import { References } from '../history/References'


export const ButtonSquareList = () => {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [key, setKey] = useState('Escudo')

   const handleOption= ()=>{
        setButtonClicked(!buttonClicked)
        setKey(key)  
        console.log(key)
    }


    function handleShield() {
    
    handleOption()

    handleOption && key === "Escudo" && <Shield/>           
    handleOption && key === "Historia" && <History/>
    handleOption && key === "Bandera"&& <Flag/>
    handleOption && key === "Referencias"&&  <References/>
 }


    return (
        <>
            <Container  className='buttonToolBar'>
                <ButtonGroup>
                    <ButtonToolbar >

                        <Link to="#"  onClick= { ()=>setKey('Escudo')} onClickCapture={ (e)=> handleShield(setKey('Escudo'))} activeKey={key} >

                          <ButtonSquare 
                                className="button-square"
                                src={<i className="fas fa-shield-alt my-2"></i>}
                                text={'Escudo'}
                              
                                value={'Escudo'}
                                />
                        </Link>

                        <Link to="#"  onClick= { ()=>setKey('Historia')} onClickCapture={ (e)=> handleShield(setKey('Historia'))}>
                            <ButtonSquare
                                src={<i className="fas fa-book my-2"></i>}
                                text={'Historia'}
                                value={'Historia'}
                                />
                        </Link>
                       
                        <Link to='#'  onClick= { ()=>setKey('Bandera')} onClickCapture={ (e)=> handleShield(setKey('Bandera'))}>

                            <ButtonSquare
                                src={<i className="fas fa-flag my-2" ></i>}
                                text={'Bandera'}
                                value={'Bandera'}
                            
                                />
                        </Link>

                        <Link to='#'  onClick= { ()=>setKey('Referencias')} onClickCapture={ (e)=> handleShield(setKey('Referencias'))}>
                            <ButtonSquare
                                src={<i className="fas fa-street-view my-2"></i>}
                                text={'Referencias'} 
                                value={'Referencias'} 
                                />
                        </Link>

                    </ButtonToolbar>
                </ButtonGroup>
            </Container>

            <Container>
                {(buttonClicked && key==="Escudo") && <Shield/> }
                {(buttonClicked && key==="Historia") && <History/> }
                {( buttonClicked && key==="Bandera") && <Flag/> }
                {(buttonClicked && key==="Referencias") && <References/> }
            </Container>



        </>
    )
}
