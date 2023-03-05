import { Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { CultureBtns } from '../assets/data/CultureBtns';
import { CulturaTurismoRouter } from '../routers/CulturaTurismoRouter';


export const CulturaTurismo = () => {

  return (

    <>
      <Container>

        <h1>Cultura y Turismo</h1>
        <ButtonSquareList buttons={CultureBtns} />
        <CulturaTurismoRouter />

      </Container>
    </>
  )
}
