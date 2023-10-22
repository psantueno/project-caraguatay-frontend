import { Container, Row } from 'react-bootstrap'
import { AlertHandler} from '../../helpers/AlertHandler'


export const DPNews = ({ fns }) => {
  
  return (
    <>
      <AlertHandler />

      <Container >

      {/* ver de haer que cuando no haya nada renderice un cartel de NO HAY NADA PARA MOSTRAR     */ }

        {
          fns && fns.map((fn, index) => (
            <Row  key={index}>
              {fn}
            </Row>
          ))
        }

      </Container>
    </>
  )
}
