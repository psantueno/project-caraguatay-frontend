import { Container, Row } from 'react-bootstrap';
import { useFetchNewsByCategory } from '../hooks/useFetchNewsByCategory';
import { NewsItemContainer } from '../components/news/NewsItemContainer';

export const Comunicados = () => {

  return (
    <>
      <Container>

        <h1>Comunicados</h1>
        <hr />

        <Row className='text-indent'>
          <h5 ><b>Últimas Novedades</b></h5>

          <NewsItemContainer 
            fetch={useFetchNewsByCategory} 
            id="2" 
            route={'comunicados'}/>
        </Row >

      </Container>
    </>

  )
}
