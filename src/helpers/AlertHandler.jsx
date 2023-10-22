import React, { useContext } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap';
import DPAdminContextProvider, { DPAdminContext } from '../components/digitalPoint/DPAdminContext';

export const AlertHandler = () => {

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
    
  </>
  )
}
