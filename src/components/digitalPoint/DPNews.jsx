import { Container, Row } from 'react-bootstrap'
import { Trainning } from './Trainning'
import { Workshop } from './Workshop'


export const DPNews = () => {

  return (

    <Container>

        <Row className='text-indent'>
          <h5><b>Novedades</b></h5>
        </Row>

          <Trainning/>
          <Workshop />

      </Container>
  )
}
