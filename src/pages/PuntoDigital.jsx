import { Container, Row } from 'react-bootstrap'
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { DigitalPointBtns } from '../assets/data/DigitalPointBtns';
import { DigitalPointRouter } from '../routers/DigitalPointRouter';
import bannerPD from '../assets/images/banner-punto-digital.png'

export const PuntoDigital = () => {

  return (

    <Container>

      <img src={bannerPD} alt='' style={{ width: '100%', marginBottom: '40px', marginTop: '30px' }} />

      <ButtonSquareList buttons={DigitalPointBtns} />

      <Row className='text-indent'>

      </Row >

      <DigitalPointRouter />


    </Container>
  )
}
