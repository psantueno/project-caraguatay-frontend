import { Row, Container } from 'react-bootstrap';
import { CardModelCultura } from './components/CardModelCultura';
import { ListCampings } from '../../assets/data/ListCampings';


export const Campings = () => {

  return (

    <>
      <Container>

        <Row className='text-indent'>
          <h5><b>Campings</b></h5>
        </Row>

        <Container className='list-cards-cultura'>

          {
            ListCampings.map((camping) => (

              <CardModelCultura
                key={camping.id}
                {...camping}
              />

            ))
          }

        </Container>
      </Container>

    </>


  )
}

