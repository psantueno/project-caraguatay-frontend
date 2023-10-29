
import { Carousel, Container } from 'react-bootstrap';
import { DPCard } from './components/DPCard';
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';

export const DPCarousel = ({ title, idCat} ) => {

  const { eventsDp } = useFetchDpByCategory(idCat)

  return (
    <Container className='list-cards-section' >
      <h5><b>{title}</b></h5>
        {
          eventsDp && eventsDp.length > 0 ? (
            <Carousel className='dpCarousel'>
              {eventsDp.map((dpItem) => (
                <Carousel.Item key={dpItem.id}>
                  <DPCard 
                  {...dpItem}
                  requirements = {"Consultar en sección"}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p>No existen eventos para mostrar</p>
          )
        }
   
    </Container>
  )
}
