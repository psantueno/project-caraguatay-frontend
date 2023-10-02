import { Container } from 'react-bootstrap';
import { DPCard } from './components/DPCard';
import { ModalCreate } from './components/modals/ModalCreate';
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';

export const Trainning = () => {

  const {eventsDp}= useFetchDpByCategory(1)
  // console.log(eventsDp);
  
  return (
    <Container>
      <h5><b>Talleres</b></h5>
      
      <Container className='list-cards-section'>
        {/* MAP DE LAS TARJETAS DE TALLERES / CAPACITACIONES */}
        {
          eventsDp && eventsDp.map((dpnew) => (
            <DPCard
              key={dpnew.id}
              dpnew={ dpnew }
              {...dpnew}
            />
          ))
        }
      </Container>
    </Container>
  )
}
