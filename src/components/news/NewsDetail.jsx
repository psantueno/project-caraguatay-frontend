import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useFetchNewsByCategory, usefetchNewsById } from '../../hooks/index'
import { Loader } from '../buttons/Loader';
import { NewsItem } from './NewsItem';
import { Card, Button, Carousel, Col, Row } from 'react-bootstrap'
import '../../index.css';
import { MoreNews } from './MoreNews';



export const NewsDetail = () => {

    const { news, loadingFetch, error, idCat } = usefetchNewsById();

    function categorySlug(category) {
        // Divide la cadena en palabras
        const words = category.split(/\s+/);

        // Si hay más de una palabra, únelas con "-"
        if (words.length > 1) {
            return words.join('-').toLowerCase();
        } else {
            return category.toLowerCase();
        }
    }

    useEffect(() => {
        // Desplázate hacia arriba cuando el componente se monta
        window.scrollTo(0, 0);
    }, [news]);

    if (loadingFetch) {
        return <Loader text={'cargando la noticia'} loader={loadingFetch} />;  // importar el loader componente
    }
    if (error) {
        return error  // importar el loader componente
    }

    return (

        <>
            <Row >
                <Col xs={12} lg={9} className='cardImg-detail'>
                    <Card className='card-lg' >
                        <Card.Header data-ride="carousel " className='carousel-slide cardImg-detail lg={12} '   >
                            {/*                             
                            {
                                news.urlArray.length === null &&
                                <Card.Img
                                    variant="top"
                                    src={"https://res.cloudinary.com/caraguatay/image/upload/v1692640610/noticias/x2voqpzpj0sppszw0wdu.jpg"
                                    }
                                    className='cardImg'
                                    styles={{ display: 'none' }}
                                />
                            } */}
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
                                            <Carousel.Item className='' interval={33000} key={i}>
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
                                <small> <Link to={`/${categorySlug(news.category)}`} className="cardLink-lg" > {news.category} </Link></small>
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
                                <Button className='mt-3 buttonPosition' >Volver a noticias</Button>
                            </Link>
                        </Card.Footer>
                    </Card>
                    <Row xs={12} md={6} lg={3} className='d-block cardImg-detail' >
                        <h4> <strong> Mas noticias.. </strong></h4>

                    </Row>
                    {/* <MoreNews id={`"${idCat}"`} /> */}
                    <MoreNews
                        fechId={Number(idCat)}
                        fech={useFetchNewsByCategory}
                        newsId={news.id}
                    />
                </Col>
            </Row >
        </>
    )
}