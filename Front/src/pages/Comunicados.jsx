import { Container, Row } from 'react-bootstrap';
import { NewsItem } from '../components/news/NewsItem';

export const Comunicados = () => {

  return (
    <>
      <Container>

        <h1>Comunicados</h1>
        <hr />

        <Row className='text-indent'>
          <h5 ><b>Últimas Novedades</b></h5>

          <NewsItem />
          <NewsItem />
          <NewsItem />
        </Row >

      </Container>
    </>

  )
}
