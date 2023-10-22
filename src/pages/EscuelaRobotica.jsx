
import { Container } from 'react-bootstrap'
import { DPNews, RoboticSchool } from '../components/digitalPoint';


export const EscuelaRobotica = () => {

  return (
    <Container>
      <DPNews fns={[<RoboticSchool />]} />
    </Container>
  )
}
