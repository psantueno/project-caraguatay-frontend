import { Row, Col } from 'react-bootstrap'
import { DPNews } from '../components/digitalPoint';
import { DPCarousel } from '../components/digitalPoint/DPCarousel';
import { DPAlertHandler } from '../helpers/DPAlertHandler';


export const Novedades = () => {



  return (
    <>

      <DPAlertHandler />

      <Row>
        <h5><b>Novedades</b></h5>
        <p> Consulte a continuación las novedades sobre Talleres, Capacitaciones y eventos de la escuela de robótica disponibles.</p>
      </Row>

      <Row>
        <Col>
          <DPCarousel title={"CAPACITACIONES"} idCat={2} />
        </Col>
        <Col>
          <DPCarousel title={"TALLERES"} idCat={1} />
        </Col>
        <Col>
          <DPCarousel title={"ROBOTICA"} idCat={3} />
        </Col>

      </Row>

     
     
      <Row style={{ marginTop: '100px' }}>

        <Col>

          <DPCarousel title={"Talleres"} idCat={1} />
        </Col>

      </Row>

      <Row style={{ marginTop: '100px' }}>
        <DPCarousel title={"Escuela de Robótica"} idCat={3} />

      </Row>
    </>
  )
}
