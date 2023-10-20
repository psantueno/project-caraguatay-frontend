import { useContext } from 'react';
import DPAdminContextProvider, { DPAdminContext } from './DPAdminContext';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { DPCard } from './components/DPCard'
import { ModalCreate } from './components/modals/ModalCreate'
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';


export const Workshop = () => {

  const { eventsDp } = useFetchDpByCategory(1)

  return (

    <Container>
      <h5><b>Talleres</b></h5>

      <Container className='list-cards-section'>
        {/* MAP DE LAS TARJETAS DE TALLERES */}
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
