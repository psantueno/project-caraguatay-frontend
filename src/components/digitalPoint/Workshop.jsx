import { Button, Container, Row } from 'react-bootstrap';
import { ListDPNews } from '../../assets/data/ListDPNews';
import { DPCard } from './components/DPCard';


export const Workshop = () => {

  return (

    <Container>
      
        <h5><b>Capacitaciones</b></h5>

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
