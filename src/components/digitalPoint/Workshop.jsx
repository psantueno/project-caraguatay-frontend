import {  Container } from 'react-bootstrap';
import { DPCard } from './components/DPCard'
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';


export const Workshop = () => {

  const { eventsDp } = useFetchDpByCategory(1)

  return (

    <Container>
      <h5><b>Talleres</b></h5>

      <Container className='list-cards-section'>
        {/* MAP DE LAS TARJETAS DE TALLERES */}
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
