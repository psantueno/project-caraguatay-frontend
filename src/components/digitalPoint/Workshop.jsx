import { useContext } from 'react';
import DPAdminContextProvider, { DPAdminContext } from './DPAdminContext';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import { DPCard} from './components/DPCard'
import { ModalCreate } from './components/modals/ModalCreate'
import { useFetchDpByCategory } from '../../hooks/useFetchDpByCategory';


export const Workshop = () => {

  const {eventsDp}= useFetchDpByCategory(1)
  // console.log(eventsDp);
  const {
    setShowResOk,
    setShowResBad,
    showResOk,
    showResBad,
    responseMsg,
  } = useContext(DPAdminContext, DPAdminContextProvider);


  return (

    <>
      {/* RESPUESTA OK DEL RESPONSE */}
      <Alert show={showResOk} variant="primary" className="mt-2">
        <Row>
          <Col>
            <p> {responseMsg && responseMsg.msg ? responseMsg.msg : null} </p>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              onClick={() => setShowResOk(false)}>
              Cerrar
            </Button>
          </Col>
        </Row>
      </Alert>
      {/* RESPUESTA OK DEL RESPONSE */}

      {/* RESPUESTA BAD DEL RESPONSE */}

      <Alert show={showResBad} variant="danger" className="mt-2">
        <Row>
          <Col>
            <p>{responseMsg && responseMsg.errors
              ? responseMsg.errors.map((field, index) => (
                <li key={index}>{field.msg}</li>
              ))
              : null
            }</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              variant='danger'
              onClick={() => setShowResBad(false)}>
              Cerrar
            </Button>
          </Col>
        </Row>
      </Alert>
      {/* RESPUESTA BAD DEL RESPONSE */}

    <Container>
      <h5><b>Talleres</b></h5>
  
      <Container className='list-cards-section'>
        {/* MAP DE LAS TARJETAS DE TALLERES / CAPACITACIONES */}
        {
          eventsDp && eventsDp.map((dpItem) => (
            <DPCard
            key={dpItem.id}
            {...dpItem}
            />
            ))
          }
      </Container>
    </Container>
          </>
  )
}
