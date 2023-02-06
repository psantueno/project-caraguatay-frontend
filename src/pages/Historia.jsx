import { Navigate, Route, Routes } from 'react-router-dom';
import {Row, Container} from 'react-bootstrap';
import { HistoryButtonSquareList } from '../components/history/HistoryButtonSquareList';
import {Flag, History, References, Shield } from '../components/history'

export const Historia = () => {
  return (
    <>
 

    <div className='body-culturayturismo' style={{textAlign:'center', padding:'0px'}}>
      <h1 className="titles-subtitles">Historia</h1>

      <Container style={{ textAlign: 'center' }}>
        <Row className='mb-5'>
          <HistoryButtonSquareList />
        </Row>
      </Container>

      <div className="container-router">
            <Routes>
                <Route path="escudo" element={<Shield />} />
                <Route path="Bandera" element={<Flag />} />
                <Route path="Referencias" element={<References />} />
                <Route path="historia" element={<History />} />
                                
                <Route path="/" element={<Navigate to="/historia/escudo" />} />
            </Routes>
        </div>

    </div>
    


    
    </>
  )
}
