import { Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { HistoryBtns } from '../assets/data/HistoryBtns';
import { HistoriaRouter } from '../routers/HistoriaRouter';


export const Historia = () => {

  return (

    <>
      <Container style={{maxWidth:'1200px'}}>

        <h1>Historia</h1>
        <hr />
        <ButtonSquareList buttons={HistoryBtns} />
        <HistoriaRouter />

      </Container>
    </>
  )
}
