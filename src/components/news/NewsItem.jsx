import React, { useEffect, useState } from 'react'
import { Card, Container, Collapse, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import photo1 from '../../assets/images/news.jpg'
import '../../index.css';


export const NewsItem = ({

    urls = "",
    category = "",
    date = "",
    title = "",
    text = "",

}) => {
    const [open, setOpen] = useState(false);
    const [textCollpase, setTextCollapse] = useState({})
    const [urlArray, setUrlArray] = useState([])

    const textCollapsed = () => {

        setOpen(!open),
            setTextCollapse(textCollpase)
    }
 

    useEffect(() => {
        if (urls && urls.trim() !== "") {
            setUrlArray(urls.split(',')); // Dividir la cadena `urls` por comas usando split(',')
        } else {
            setUrlArray([]); // Si urls es nulo o vacío, establecer urlArray como un arreglo vacío
        }
    }, [urls]);



    return (
        <>
            <Container className="container-news" >

                <Card className='cardNews' >

                    {
                        urlArray.length === 0
                            ?
                            <Card.Img
                                variant="top"
                                src={"https://res.cloudinary.com/caraguatay/image/upload/v1692640610/noticias/x2voqpzpj0sppszw0wdu.jpg"
                                }
                                className='cardImg'
                            />
                            :
                            (
                                <Carousel className="carousel-inner-moreNews active carousel-dark" >
                                    {
                                    urlArray.map((url, i) => (
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
                            )
                    }

                    <Card.Subtitle className="cardSubtitle">
                        <Card.Text className="cardCategory">
                            <small> <Link to="#" className="cardLink" > {category} </Link></small>
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
                                    {text.length < 100 ? { text } :
                                        <>
                                            `${text.slice(0, 100)}...`
                                        </>
                                    }
                                    <button onClick={textCollapsed}>
                                        {open ? 'Leer menos...' : 'Leer más...'}
                                    </button>
                                </>
                            }

                        </Card.Text>
                    </Card.Body>
                    <Collapse in={open}>
                        <div>{text}</div>
                    </Collapse>
                    <Card.Footer className='cardLink'>
                        {/* <small className='text-muted ' ><Link to={link} className='cardLink'> Leer mas...</Link></small> */}
                    </Card.Footer>
                </Card>
            </Container>

        </>
    )
}

