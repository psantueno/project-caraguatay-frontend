import React, { useEffect, useState } from 'react'
import { Card, Container, Collapse, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../index.css';
import { DeleteButton, EditButton } from '../buttons';



export const NewsItem = ({
    id = "",
    urls = "",
    category = "",
    date = "",
    title = "",
    mainText = "",
    urlArray = [],
    link = "",

}) => {

    const [urlsArray, setUrlsArray] = useState(urlArray)

    // Reemplaza los espacios por guiones medios
    const categorySlug = category.replace(/\s+/g, '-').toLowerCase() ;

    useEffect(() => {
        if (urls && urls.trim() !== "") {
            setUrlsArray(urls.split(','));
            // setUrlsArray(urls.split(',').map(url => url.trim())); // Dividir la cadena `urls` por comas usando split(',')
        } else {
            setUrlsArray([]); // Si urls es nulo o vacío, establecer urlArray como un arreglo vacío
        }
    }, [urls]);


    return (
        <>
            <Container className="container-news" >
                <Card className='cardNews' >
                    {
                        urlsArray.length === 0  &&
                        <Card.Img
                            variant="top"
                            src={"https://res.cloudinary.com/caraguatay/image/upload/v1693184996/Logos/escudo_yntmdj.png"
                            }
                            className='cardImg'                           
                        />
                    }
                    {
                        (urlsArray.length === 1) &&
                        <Card.Img
                            variant="top"
                            src={urlsArray}
                            className='cardImg'
                        />
                    }
                    {
                        (urlsArray.length > 1) &&

                        <Carousel className="carousel-inner-moreNews active carousel-dark" >
                            {
                                urlsArray.map((url, i) => (
                                    <Carousel.Item className='' interval={3000} key={i}>
                                        <Card.Img
                                            variant="top"
                                            src={url}
                                            className='cardImg'
                                        />
                                        {/* {console.log(url, 'url del map')} */}
                                    </Carousel.Item>
                                ))
                            }

                        </Carousel>

                    }

                    <Card.Subtitle className="cardSubtitle">
                        <Card.Text className="cardCategory">
                            <small> <Link to={`/${categorySlug}` }className="cardLink" > {category} </Link></small>
                        </Card.Text>
                        <Card.Text className="cardLink">
                            <small >  {date} </small>
                        </Card.Text>
                    </Card.Subtitle>
                    <Card.Body className='cardBody'>
                        <Card.Title className='cardTitle'>{title}</Card.Title>
                        <Card.Text className='cardText' >

                            {
                                <>
                                    {mainText.length < 250 ? mainText :
                                        <>
                                            {`${mainText.slice(0, 250)}...`}
                                        </>
                                    }
                                </>
                            }

                        </Card.Text>
                    </Card.Body>
                        <Link to={`${link}`}><small className='text-muted ' >Leer mas...</small></Link>
                    <Card.Footer className='cardLink'>
                        <EditButton className="size-lg"/>
                        <DeleteButton className="size-lg"/>
                    </Card.Footer>
                </Card>
            </Container>

        </>
    )
}