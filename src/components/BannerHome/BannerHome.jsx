import {Container, Row} from 'react-bootstrap'


import Banner from '../../assets/images/Banner2.png'

export function BannerHome() {
  return (
    <Container fluid>
      <Row >

        <img src={Banner} alt="Banner" className='banner-home'/>

      </Row>


    </Container>
  )
}
