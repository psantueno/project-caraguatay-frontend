
import { Container, Row } from 'react-bootstrap'
import { DPNews, Workshop } from '../components/digitalPoint';


export const Talleres = () => {

  return (
    <Container>
      <DPNews fns={[<Workshop />]} />
    </Container>
  )
}
