import { Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { HistoryBtns } from '../assets/data/HistoryBtns';
import { HistoriaRouter } from '../routers/HistoriaRouter';


export const Historia = () => {

  return (

    <>
      <Container>

        <h1>Historia</h1>
        <ButtonSquareList buttons={HistoryBtns} />
        <HistoriaRouter />

      </Container>
    </>
  )
}
