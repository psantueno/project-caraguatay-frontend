import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
import ButtonSquare from './ButtonSquare';
import { Shield } from '../history/Shield';
import { History } from '../history/History';


export const ButtonSquareList = () => {


    return (
        <>
            <Container>
                <ButtonGroup>
                    <ButtonToolbar className='buttonToolBar' id="controlled-div" >

                    <Link to={'#'}>
                           <ButtonSquare
                                className="button-square"
                                src={<i className="fas fa-shield-alt my-2"></i>}
                                text={'Escudo'}
                                eventKey={'Escudo'}
                                                    
                                />
                    </Link>
                                    
                       
                            <ButtonSquare
                                src={<i className="fas fa-book my-2"></i>}
                                text={'Historia'}
                                eventKey={'historia'}
                              
                                />
                                
                   
                       
                        <Link to={'#'}>

                            <ButtonSquare
                                src={<i className="fas fa-flag my-2" ></i>}
                                text={'Bandera'}
                                eventKey={'bandera'}
                               />
                        </Link>

                        <Link to='#'>
                            <ButtonSquare
                                src={<i className="fas fa-street-view my-2"></i>}
                                text={'Referencias'} 
                                eventKey={'referencias'}/>
                        </Link>
                    </ButtonToolbar>
                </ButtonGroup>

            </Container>



        </>
    )
}