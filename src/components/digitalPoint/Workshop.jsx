import { Button, Container, Row } from 'react-bootstrap';
import { ListDPNews } from '../../assets/data/ListDPNews';
import { DPCard } from './components/DPCard';
import { ModalCreate } from './components/modals/ModalCreate';


export const Workshop = () => {

  return (

    <Container>

      <h5><b>Capacitaciones</b></h5>

      <ModalCreate />

      <Container className='list-cards-section'>

        {/* MAP DE LAS TARJETAS DE TALLERES / CAPACITACIONES */}

        {
          ListDPNews.map((dpnew) => (

            <DPCard
              key={dpnew.id}
              {...dpnew}
            />

          ))
        }

      </Container>

    </Container>
  )
}
