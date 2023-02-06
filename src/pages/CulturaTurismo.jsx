import { Navigate, Route, Routes } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { Camping, PlacesToVisit, Entrepreneurship, Location } from '../components/culturaTurismo';


export const CulturaTurismo = () => {

  return (

   <>
  

      <Container className='body-cultrayturismo' >
        <h1  >Cultura y Turismo</h1>
        <Row className='mb-5'>
          <ButtonSquareList />
        </Row>
      
            <Routes>
                <Route path="location" element={<Location />} />
                <Route path="places" element={<PlacesToVisit />} />
                <Route path="entrepreneurship" element={<Entrepreneurship />} />
                <Route path="camping" element={<Camping />} />
                                
                <Route path="/" element={<Navigate to="/culturaTurismo/location" />} />
            </Routes>
        </Container>
   </>

   

  )

}
