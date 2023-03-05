import { Container, Row } from 'react-bootstrap'
import Banner from '../../assets/images/banner-home.png';

export const BannerHome = () => {

  return (

    <Container fluid>
      <Row>
        <img src={Banner} alt="Banner" className='banner-home' />
      </Row>
    </Container>
  )

}
