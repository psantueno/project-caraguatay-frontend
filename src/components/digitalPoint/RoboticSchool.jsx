import { Container } from 'react-bootstrap';
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';
import { DPCard } from './components/DPCard';

export const RoboticSchool = () => {

  const { eventsDp } = useFetchDpByCategory(3)

  return (

    <Container>
      <h5><b>Escuela de Robótica</b></h5>

      <Container className='list-cards-section'>
        {/* MAP DE LAS TARJETAS DE ESCUELA ROBOTICA*/}
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
