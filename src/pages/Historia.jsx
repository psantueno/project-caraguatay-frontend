import { Navigate, Route, Routes } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { Flag, Origin, References, Shield } from '../components/history';
import { HistoryBtns } from '../assets/data/HistoryBtns';


export const Historia = () => {

  return (

    <>
      <Container>

        <h1>Historia</h1>

        <Row className='mb-5'>
          <ButtonSquareList buttons={HistoryBtns} />
        </Row>

        <Routes>
          <Route path="escudo" element={<Shield />} />
          <Route path="bandera" element={<Flag />} />
          <Route path="referencias" element={<References />} />
          <Route path="origen" element={<Origin />} />

          <Route path="/" element={<Navigate to="/historia/escudo" />} />
        </Routes>

      </Container>
    </>
  )
}
