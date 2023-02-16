import {FormalitiesBtns} from '../../assets/data/FormalitiesBtns'
import { Container, Row } from 'react-bootstrap'
import { FormalitiesButtonSquareList } from '../buttonsSquare/FormalitiesButtonSquareList'
import '../../../src/index.css'


export function Formalities() {



  return (
    <>
      <Container>

        <h1>Guía de Trámites</h1>


        <nav  >
          <Row className='mb-5' >
            <FormalitiesButtonSquareList buttons={FormalitiesBtns} />
          </Row>

        </nav>



      </Container>

    </>
  )
}
