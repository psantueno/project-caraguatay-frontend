import {FormalitiesBtns} from '../../assets/data/FormalitiesBtns'
import {HistoryBtns} from '../../assets/data/HistoryBtns'
import { Container, Row } from 'react-bootstrap'
import { FormalitiesButtonSquareList } from '../buttonsSquare/FormalitiesButtonSquareList'
import {ButtonSquareList} from '../buttonsSquare/ButtonSquareList'
import '../../../src/index.css'
import { useState } from 'react'


export function Formalities() {

  const [display, setDisplay] = useState(false)

  return (
    <>
      <Container>

        <h1>Guía de Trámites</h1>


        <nav onClick={() => setDisplay('')}>      
            <ButtonSquareList buttons={FormalitiesBtns} />
        </nav>

        

        <Container>

          {display === "#MacroClick" && <MacroClick />}
          {/* {(display === "#Licencia_conducir") && <DriveLicence />}
          {(display === '#Habilitacion_comercial') && <CommerceEnable />}
          {(display === '#Obras_particulares') && <PrivateConstruction />} */}

          </Container>



      </Container>

    </>
  )
}
