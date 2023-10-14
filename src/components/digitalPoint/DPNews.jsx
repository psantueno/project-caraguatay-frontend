import { Container, Row } from 'react-bootstrap'
import { Training } from './Training'
import { Workshop } from './Workshop'
import { RoboticSchool } from './RoboticSchool'


export const DPNews = () => {

  return (

    <Container>

        <Row className='text-indent'>
          <h5><b>Novedades</b></h5>
        </Row>

          <Training/>
          <Workshop />
          <RoboticSchool />

      </Container>
  )
}
