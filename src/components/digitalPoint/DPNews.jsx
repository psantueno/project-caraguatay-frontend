import { Container, Row } from 'react-bootstrap'
import { DPAlertHandler} from '../../helpers/DPAlertHandler'


export const DPNews = ({ fns }) => {
  
  return (
    <>
      <DPAlertHandler />

      <Container >

      {/* ver de haer que cuando no haya nada renderice un cartel de NO HAY NADA PARA MOSTRAR     */ }

        {
          fns && fns.map((fn, index) => (     // DOCUMENTAR ESTAS FUNCIONES
            <Row  key={index}>
              {fn}
            </Row>
          ))
        }

      </Container>
    </>
  )
}
