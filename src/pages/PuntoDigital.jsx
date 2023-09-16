import { Container, Row } from 'react-bootstrap'
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { DigitalPointBtns } from '../assets/data/DigitalPointBtns';
import { DigitalPointRouter } from '../routers/DigitalPointRouter';
import bannerPD from '../assets/images/banner-punto-digital.png'
import { NewsItemContainer } from '../components/news/NewsItemContainer';
import { useFetchNewsByCategory } from '../hooks';

export const PuntoDigital = () => {

  return (

    <Container>

      <img src={bannerPD} alt='' style={{ width: '100%', marginBottom: '40px', marginTop: '30px' }} />

      <ButtonSquareList buttons={DigitalPointBtns} />

      <Row className='text-indent'>

      </Row >

      <DigitalPointRouter />

      <Row className='text-indent'>
        <h5 ><b>Últimas Noticias en Digital Point</b></h5>
        <NewsItemContainer
          fetch={useFetchNewsByCategory}
          idCat="4"
          route={'noticias'} />
      </Row >


    </Container>
  )
}
