
import { Carousel, Container } from 'react-bootstrap';
import { DPCard } from './components/DPCard';
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';
import { Link } from 'react-router-dom';

export const DPCarousel = ({ title, idCat} ) => {

  const titlelowercase = title.toLowerCase();


  const { eventsDp } = useFetchDpByCategory(idCat)

  return (
    <Container className='list-cards-section' >
      <Link to={`/punto-digital/${titlelowercase}`}><h5><b> {title}</b></h5></Link>
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
