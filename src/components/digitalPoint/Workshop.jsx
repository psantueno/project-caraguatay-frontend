import { Button, Container, Row } from 'react-bootstrap';
import { DPCard} from './components/DPCard'
import { ModalCreate } from './components/modals/ModalCreate'
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';


export const Workshop = () => {

  const {eventsDp}= useFetchDpByCategory(1)
  // console.log(eventsDp);

  return (
    <Container>
      <h5><b>Talleres</b></h5>
  
      <Container className='list-cards-section'>
        {/* MAP DE LAS TARJETAS DE TALLERES / CAPACITACIONES */}
        {
          eventsDp && eventsDp.map((dpItem) => (
            <DPCard
              key={dpItem.id}
              {...dpItem}
            />
          ))
        }
      </Container>
    </Container>
  )
}
