import { Navigate, Route, Routes } from 'react-router-dom';
import { Row, Container } from 'react-bootstrap';
import { ButtonSquareList } from '../components/buttonsSquare/ButtonSquareList';
import { Camping, PlacesToVisit, Entrepreneurship, Location } from '../components/culturaTurismo';


export const CulturaTurismo = () => {

  return (

    <div className='body-culturayturismo'>
      <h1 className="titles-subtitles">Cultura y Turismo</h1>

      <Container style={{ textAlign: 'center' }}>
        <Row className='mb-5'>
          <ButtonSquareList />
        </Row>
      </Container>

      <div className="container-router">
            <Routes>
                <Route path="location" element={<Location />} />
                <Route path="places" element={<PlacesToVisit />} />
                <Route path="entrepreneurship" element={<Entrepreneurship />} />
                <Route path="camping" element={<Camping />} />
                                
                <Route path="/" element={<Navigate to="/culturaTurismo/location" />} />
            </Routes>
        </div>

    </div>

  )

}
