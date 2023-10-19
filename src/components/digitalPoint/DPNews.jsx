import React, { useContext } from 'react'
import { Alert, Container, Row, Col, Button } from 'react-bootstrap'
import { Training } from './Training'
import { Workshop } from './Workshop'
import { RoboticSchool } from './RoboticSchool'
import DPAdminContextProvider, { DPAdminContext } from './DPAdminContext'
import { ResOkResBad } from '../../helpers/ResOkResBad'


export const DPNews = () => {


  return (
    <>

      {/* <ResOkResBad/> */}


      <Container >
        <Row className='' s={12} md={6} lg={3} >

          <h5><b>Novedades</b></h5>
        </Row>

        <Row className='' s={12} md={6} lg={3} >

          <Training />
        </Row>
        <Row className='t' s={12} md={6} lg={3} >

          <Workshop />
        </Row>
        <Row className='' s={12} md={6} lg={3} >

          <RoboticSchool />
        </Row>





      </Container>
    </>
  )
}
