
import { Container } from 'react-bootstrap'
import { DPNews, RoboticSchool, Training, Workshop } from '../components/digitalPoint';


export const Novedades = () => {

  return (
    <Container>
      <DPNews fns={[<Training />, <Workshop />, <RoboticSchool />]} />
    </Container>
  )
}
