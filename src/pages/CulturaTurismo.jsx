import { Navigate, Route, Routes } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { Camping, PlacesToVisit, Entrepreneurship, Location } from '../components/culturaTurismo';
import { CultureBtns } from '../assets/data/CultureBtns';


export const CulturaTurismo = () => {

  return (

    <>
      <Container>

        <h1>Cultura y Turismo</h1>

       
          <ButtonSquareList buttons={ CultureBtns }/>
        

        <Routes>
          <Route path="ubicacion" element={<Location />} />
          <Route path="turismo" element={<PlacesToVisit />} />
          <Route path="emprendimientos" element={<Entrepreneurship />} />
          <Route path="camping" element={<Camping />} />

          <Route path="/" element={<Navigate to="/culturaTurismo/ubicacion" />} />
        </Routes>

      </Container>
    </>
  )
}
