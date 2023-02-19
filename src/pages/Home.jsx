import { Header } from '../components/header/Header';
import { NewsItem } from '../components/news/NewsItem'
import { Formalities } from '../components/Formalities'
import { BannerHome } from '../components/BannerHome/BannerHome'
import { Container, Row } from 'react-bootstrap';

export const Home = () => {
  return (
    <>

      <Container>
        <Row>
          <BannerHome />
        </Row>

        
      </Container>
          <Formalities />
          
       

      <Container>
        <h1> Ultimas noticias </h1>

        <Row className='mb-5'>
          <NewsItem />
        </Row>

      </Container>

    </>
  )
}
