
import React, { useEffect, useState } from 'react'
import { Card, Container, Button, Carousel, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ButtonGeneric } from '../ButtonGeneric'
// import slide1 from '../../assets/images/slide1.jpg'
// import slide2 from '../../assets/images/slide2.jpg'
//import { Header } from '../header/Header'
import '../../index.css';
import { NewsItem } from './NewsItem'
import  { usefetchNewsById } from '../../hooks/useFetchNewsById'

export const NewsDetail = () => {

    const { news, loading, error } = usefetchNewsById();
    console.log(news , 'linea 16');

    if (loading) {
      return <div>Cargando...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!news) {
      return <div> No hay datos de noticias disponibles.</div>;
    }
console.log(news.urlArray, 'linea 28');

    
    return (

        <>
            <Row >
                <Col xs={12} lg={9}>

                    <Card className='card-lg' >

                        <Card.Header data-ride="carousel " className='carousel-slide '  >  
                        {/* le quite col-lg-12="true" */}
                        {
                        news.urlArray.length === 0  &&
                        <Card.Img
                            variant="top"
                            src={"https://res.cloudinary.com/caraguatay/image/upload/v1692640610/noticias/x2voqpzpj0sppszw0wdu.jpg"
                            }
                            className='cardImg'
                        />
                    }
                    {
                        (news.urlArray.length === 1) &&
                        <Card.Img
                            variant="top"
                            src={news.urls}
                            className='cardImg'
                        />
                    }
                    {
                        (news.urlArray.length > 1) &&

                        <Carousel className="carousel-inner-moreNews active carousel-dark" >
                            {
                                news.urlArray.map((url, i) => (
                                    <Carousel.Item className='' interval={3000} key={i}>
                                        <Card.Img
                                            variant="top"
                                            src={url}
                                            className='cardImg'
                                        />
                                        {console.log(url, 'url del map')}
                                    </Carousel.Item>
                                ))
                            }

                        </Carousel>

                    }
                        </Card.Header>


                        <Card.Subtitle className="cardSubtitle" >
                            <Card.Text className="cardCategory">
                                <small> <Link to="#" className="cardLink-lg" > {news.category} </Link></small>
                            </Card.Text>
                            <Card.Text className="cardLink-lg">
                                <small >  {news.date} </small>
                            </Card.Text>
                        </Card.Subtitle>
                        <Card.Body className='cardBody'>
                            <Card.Title className='cardTitle'>{news.title}</Card.Title>
                            <Card.Text className='cardText' >
                                {news.mainText}

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='cardLink'>


                            <Link to="/">

                                <ButtonGeneric text="<< Volver a noticias" />

                            </Link>


                        </Card.Footer>
                    </Card>
                </Col>

                <Col xs={12} md={12} lg={3} className='d-block' >

                    <h4> <strong> Mas noticias.. </strong></h4>

                    <Row >


                        <Carousel className="carousel-inner-moreNews active carousel-dark" >
                            <div className="carousel-item  "  >
                                <div className='cards-wrapper ' interval={3000} >
                                    <NewsItem className=' slide-moreNews ' mainText={'un texto'} />

                                </div>
                            </div>
                            <div className="carousel-item "  >
                                <div className='cards-wrapper' interval={3000}>
                                    <NewsItem className=' slide-moreNews' mainText={'un texto'} />
                                </div>
                            </div>
                            <div className="carousel-item "  >
                                <div className='cards-wrapper' interval={3000}>
                                    <NewsItem className=' slide-moreNews '  mainText={'un texto'}/>
                                </div>
                            </div>

                        </Carousel>


                    </Row>


                </Col>
            </Row>



        </>
    )
}

