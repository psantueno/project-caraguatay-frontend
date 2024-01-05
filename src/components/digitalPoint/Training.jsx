
import { Container } from 'react-bootstrap';
import { DPCard } from './components/DPCard';
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';

export const Training = () => {

  const { eventsDp } = useFetchDpByCategory(2);


  return (
    <Container>
      <h5><b>Capacitaciones</b></h5>

      <Container className='list-cards-section'>
        {/* MAP DE LAS TARJETAS DE CAPACITACIONES */}
        {
          eventsDp && eventsDp.length > 0 ? (
            eventsDp.map((dpItem) => (
              <DPCard
                key={dpItem.id}
                {...dpItem}
              />
            ))
          ) : (
            <p>No existen eventos para mostrar</p>
          )
        }
      </Container>
    </Container>
  )
}
