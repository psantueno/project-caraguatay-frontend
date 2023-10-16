import { Container, Row } from 'react-bootstrap'
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { DigitalPointBtns } from '../assets/data/DigitalPointBtns';
import { DigitalPointRouter } from '../routers/DigitalPointRouter';
import bannerPD from '../assets/images/banner-punto-digital.png'
import { NewsItemContainer } from '../components/news/NewsItemContainer';
import { useFetchNewsByCategory, useForm } from '../hooks';
import { ModalCreate } from '../components/digitalPoint/components/modals/ModalCreate';


export const PuntoDigital = () => {


  return (

    <Container>

      <img src={bannerPD} alt='' style={{ width: '100%', marginBottom: '40px', marginTop: '30px' }} />

      <ButtonSquareList buttons={DigitalPointBtns} />



      <Row className='text-indent'>
        <ModalCreate />   {/* MODAL PARA DESPLEGAR FORM DE CREACIÓN DE TALLER / CAPACITACIÓN */}
      </Row >

      <DigitalPointRouter />



      <Row className='text-indent'>
        <NewsItemContainer
          ft={useFetchNewsByCategory}
          idCat="4"
          route={'punto-digital'} />
      </Row >


    </Container>
  )
}
