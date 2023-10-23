import { Row } from 'react-bootstrap'
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
        <DPCarousel title={"Capacitaciones"} idCat={2}  />
       
      </Row>

      <Row style={{marginTop : '100px'}}>
        <DPCarousel title={"Talleres"} idCat={1} />
       
      </Row>

      <Row style={{marginTop : '100px'}}>
        <DPCarousel title={"Escuela de Robótica"} idCat={3} />
       
      </Row>
    </>
  )
}
