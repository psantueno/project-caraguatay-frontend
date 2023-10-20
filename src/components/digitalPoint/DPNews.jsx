import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { ResOkResBad } from '../../helpers/ResOkResBad'


export const DPNews = ({ fns }) => {
  
  return (
    <>
      <ResOkResBad />

      <Container >
        <Row>
          <h5><b>Novedades</b></h5>
        </Row>
        {
          fns && fns.map((fn, index) => (
            <Row  key={index}>
              {[fn]}
            </Row>
          ))
        }
      </Container>
    </>
  )
}
