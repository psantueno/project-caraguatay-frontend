
import React, { useEffect, useState } from 'react'
import { Card, Container, Button, Carousel, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ButtonGeneric } from '../ButtonGeneric'
import '../../index.css';
import { useFetchNewsByCategory, usefetchNewsById } from '../../hooks/index'
import { Loader } from '../buttons/Loader';
import { NewsItem } from './NewsItem';


export const NewsDetail = () => {

    const { news, loading, error, idCat } = usefetchNewsById();
    const { newsByCat, loadingCat } = useFetchNewsByCategory(idCat);

    if (loading) {
        return <Loader text={'cargando la noticia'} loader={loading} />;  // importar el loader componente

    }

    // const moreNews = newsByCat.filter( (element) => element.id !== news.id)
    // console.log(moreNews, 'morenews');

    console.log(idCat, 'este es idcat');
    console.log(newsByCat, 'este es newsByCat');


    return (

        <>
            <Row >
                <Col xs={12} lg={9}>

                    <Card className='card-lg' >

                        <Card.Header data-ride="carousel " className='carousel-slide cardImg-detail lg={12} '   >
                            {/* le quite col-lg-12="true" */}
                            {
                                news.urlArray.length === 0 &&
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
                                    className='cardImg-detail'
                                />
                            }
                            {
                                (news.urlArray.length > 1) &&

                                <Carousel className="carousel-inner active carousel-dark" >
                                    {
                                        news.urlArray.map((url, i) => (
                                            <Carousel.Item className='' interval={3000} key={i}>
                                                <Card.Img
                                                    variant="top"
                                                    src={url}
                                                    className='cardImg-detail'
                                                />
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

                <Col xs={12} md={6} lg={3} className='d-block' >

                    <h4> <strong> Mas noticias.. </strong></h4>

                    <Carousel className="carousel-inner-moreNews carousel-dark "  >

                        {
                            (loadingCat)

                                ?

                                <Loader text={'cargando más noticias'} loader={loadingCat} />

                                :


                                (
                                   newsByCat && 
                                    newsByCat.map((news, i) => (
                                        <Carousel.Item key={`${news.id}-${i}`}>
                                            <Card className=''>
                                                <NewsItem
                                                    category={news.category}
                                                    title={news.title}

                                                />
                                            </Card>
                                        </Carousel.Item>
                                    ))
                                    
                                )



                        }

                    </Carousel>

                </Col>
            </Row >
            <div>


            </div>



        </>
    )
}