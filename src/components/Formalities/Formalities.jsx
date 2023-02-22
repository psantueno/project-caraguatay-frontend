import {FormalitiesBtns} from '../../assets/data/FormalitiesBtns'
import { Container, Row } from 'react-bootstrap'
import { ButtonNoUrlList } from '../buttonsWithoutURL/ButtonNoUrlList'
import { MacroClick, DriveLicence, CommerceEnable, PrivateConstruction } from '../Formalities';
import { useState } from 'react'


export const Formalities = () => {
  

  const [display, setDisplay] = useState()
  const [isActive, setIsActive] = useState(false)

  const changeDisplay = (event) => {
   
   setDisplay(event?.target.id)
   console.log(event.target.id)
  }


  return (
    <>
      <Container>

        <h1>Guía de Trámites</h1>

            <ButtonNoUrlList changeDisplay={changeDisplay} buttons={FormalitiesBtns} isActive={()=>setIsActive(true)}/>
        
        <Container>

        
          {( display === "macroClick") && <MacroClick />}
          {( display === "licencia_conducir") && <DriveLicence />}
          {( display === 'habilitacion_comercial') && <CommerceEnable />}
          {( display === 'obras_particulares') && <PrivateConstruction />}

          </Container>


      </Container>

    </>
  )
}
