import {FormalitiesBtns} from '../../assets/data/FormalitiesBtns'
import {HistoryBtns} from '../../assets/data/HistoryBtns'
import { Container, Row } from 'react-bootstrap'
import {ButtonSquareList} from '../buttonsSquare/ButtonSquareList'
import { MacroClick, DriveLicence, CommerceEnable, PrivateConstruction } from '../Formalities';
import { useState } from 'react'


export const Formalities = () => {

  const [display, setDisplay] = useState()

  const changeDisplay = ({target}) => {
    setDisplay(target.id)
  }

  return (
    <>
      <Container>

        <h1>Guía de Trámites</h1>


              
            <ButtonSquareList changeDisplay={changeDisplay} buttons={FormalitiesBtns} />
        
        <Container>

        


          {display === "#MacroClick" && <MacroClick />}
          {(display === "#Licencia_conducir") && <DriveLicence />}
          {(display === '#Habilitacion_comercial') && <CommerceEnable />}
          {(display === '#Obras_particulares') && <PrivateConstruction />}

          </Container>



      </Container>

    </>
  )
}
