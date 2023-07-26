import { Container } from 'react-bootstrap';
import { ListDPNews } from '../../assets/data/ListDPNews';
import { DPCard } from './components/DPCard';
import { ModalCreate } from './components/modals/ModalCreate';


export const Trainning = () => {

  return (

    <Container>

      <h5><b>Talleres</b></h5>

      <ModalCreate />   {/* MODAL PARA DESPLEGAR FORM DE CREACIÓN DE TALLER / CAPACITACIÓN */}

      <Container className='list-cards-section'>

        {/* MAP DE LAS TARJETAS DE TALLERES / CAPACITACIONES */}

        {
          ListDPNews.map((dpnew) => (

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
