import { useContext } from 'react';
import { Alert, Container, Row, Col, Button } from 'react-bootstrap'
import DPAdminContextProvider, { DPAdminContext } from '../components/digitalPoint/context/DPAdminContext';

import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { DigitalPointBtns } from '../assets/data/DigitalPointBtns';
import { DigitalPointRouter } from '../routers/DigitalPointRouter';
import bannerPD from '../assets/images/banner-punto-digital.png'
import { NewsItemContainer } from '../components/news/NewsItemContainer';
import { useFetchNewsByCategory, useForm } from '../hooks';
import { ModalCreate } from '../components/digitalPoint/components/modals/ModalCreate';


export const PuntoDigital = () => {


  return (
    <>

      <Container>

        <img src={bannerPD} alt='' className='banner-punto-digital' />

        <ButtonSquareList buttons={DigitalPointBtns} />

        <Row className='text-indent'>
          <ModalCreate />   {/* MODAL PARA DESPLEGAR FORM DE CREACIÓN DE TALLER / CAPACITACIÓN */}
        </Row >

        <DPAdminContextProvider>
          <DigitalPointRouter />
        </DPAdminContextProvider>

        {/*  esto renderiza las ultimas noticias***/}

        <Row className='text-indent'>
          <NewsItemContainer
            ft={useFetchNewsByCategory}
            idCat="4"
            route={'punto-digital'} />
        </Row >
      </Container>

    </>
  )
}
