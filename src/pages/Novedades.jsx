
import { Container , Row } from 'react-bootstrap'
import { DPNews, RoboticSchool, Training, Workshop } from '../components/digitalPoint';


export const Novedades = () => {

  return (
    <>

      <Row>
        <h5><b>Novedades</b></h5>
      </Row>


      <Container>
        <DPNews fns={[<Training />, <Workshop />, <RoboticSchool />]} />
      </Container>
    </>
      )
}
