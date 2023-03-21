import { Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { DigitalPointBtns } from '../assets/data/DigitalPointBtns';
import { DigitalPointRouter } from '../routers/DigitalPointRouter';
import logo from '../assets/images/Puntodigital-banner.png'

export const PuntoDigital = () => {
  return (
    <Container style={{maxWidth:'1200px', textAlign:'center'}}>
     
    
      <img src={logo} alt=''  style={{minWidth:'300px'}}/>


     <Container>
      
        <h1>  Punto Digital</h1>
        <ButtonSquareList buttons={DigitalPointBtns} />
        <DigitalPointRouter />
        </Container>

      </Container>
  )
}
