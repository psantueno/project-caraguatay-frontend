
import { Container } from 'react-bootstrap'
import { DPNews, Training } from '../components/digitalPoint';


export const Capacitaciones = () => {

  return (
       <Container>
        <DPNews fns={[<Training />]} />
      </Container>
  )
}
