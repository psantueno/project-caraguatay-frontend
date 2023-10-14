import { Row, Container } from 'react-bootstrap';
import Makers from '../../assets/images/escuela-robotica.jpg'
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';
import { DPCard } from './components/DPCard';

export const RoboticSchool = () => {

  const {eventsDp}= useFetchDpByCategory(3)


  return (
    <Container>
    <h5><b>Escuela de Robótica</b></h5>

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
