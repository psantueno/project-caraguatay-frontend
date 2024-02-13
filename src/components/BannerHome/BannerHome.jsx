import { Container, Row } from 'react-bootstrap'
import Banner from '../../../src/assets/images/caraguatay-03.png';

export const BannerHome = () => {

  return (

    <Container fluid>
      <Row className='banner-home'>
       
        <img src={Banner} alt="Banner" className='banner-home' />
      </Row>
    </Container>
  )

}
