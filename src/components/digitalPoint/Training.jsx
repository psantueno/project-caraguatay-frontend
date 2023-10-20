import { useContext } from 'react';
import DPAdminContextProvider, { DPAdminContext } from './DPAdminContext';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { DPCard } from './components/DPCard';
import { ModalCreate } from './components/modals/ModalCreate';
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';

export const Training = () => {

  const { eventsDp } = useFetchDpByCategory(2)

  return (
    <Container>
      <h5><b>Capacitaciones</b></h5>

      <Container className='list-cards-section'>
        {/* MAP DE LAS TARJETAS DE CAPACITACIONES */}
        {
          eventsDp && eventsDp.map((dpnew) => (
            <DPCard
              key={dpnew.id}
              dpnew={dpnew}
              {...dpnew}
            />
          ))
        }
      </Container>
    </Container>
  )
}
