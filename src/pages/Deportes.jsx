import { Container, Row } from 'react-bootstrap';
import { NewsItem } from '../components/news/NewsItem';
import { NewsItemContainer } from '../components/news/NewsItemContainer';
import { useFetchNewsByCategory } from '../hooks';


export const Deportes = () => {


  return (
    <>
      <Container>

        <h1>Deportes</h1>
        <hr />

        <Row className='text-indent'>
          <h5 ><b>Últimas Noticias</b></h5>
          <NewsItemContainer 
            fetch={useFetchNewsByCategory} 
            id="1"
            route={'deportes'}/>
        </Row >

      </Container>
    </>
  )
}
