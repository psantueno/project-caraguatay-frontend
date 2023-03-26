import { Button, Container } from 'react-bootstrap';
import { ListDPNews } from '../../assets/data/ListDPNews';
import { DPCard } from './components/DPCard';

export const Trainning = () => {


  return (

    <Container>


      <h5><b>Talleres</b></h5>

      <div className='box-btn-DP'>
        <Button style={{ width: 'auto', textAlign: '' }}>
          <i className="fas fa-plus"></i> Nuevo
        </Button>
      </div>

      <Container className='list-cards-section'>

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
