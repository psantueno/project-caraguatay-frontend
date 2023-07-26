import { Container, Row } from 'react-bootstrap';
import { NewsItem } from '../components/news/NewsItem';


export const Deportes = () => {


  return (
    <>
      <Container>

        <h1>Deportes</h1>
        <hr />

        <Row className='text-indent'>
          <h5 ><b>Últimas Noticias</b></h5>

          <NewsItem />
          <NewsItem />
          <NewsItem />
        </Row >

      </Container>
    </>
  )
}
