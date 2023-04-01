import { Row, Container } from 'react-bootstrap';
import { ListEntrepreneurships } from '../../assets/data/ListEntrepreneurships';
import { CardModelCultura } from './components/CardModelCultura';

export const Entrepreneurship = () => {

  return (

    <Container>

      <Row className='text-indent'>
        <h5><b>Emprendedores</b></h5>
      </Row>

      <Container className='list-cards-section'>
        {
          ListEntrepreneurships.map((emprendimiento) => (

            <CardModelCultura
              key={emprendimiento.id}
              {...emprendimiento}
            />

          ))
        }
      </Container>

    </Container>

  )
}

