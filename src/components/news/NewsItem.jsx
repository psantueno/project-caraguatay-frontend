import { useEffect, useState } from 'react'
import { Card, Container, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { DeleteButton, EditButton } from '../buttons';
import '../../index.css';


export const NewsItem = ({
    id = "",
    urls = "",
    category = "",
    date = "",
    title = "",
    mainText = "",
    urlArray = [],
    link = "",
    onDelete,

}) => {

    const [urlsArray, setUrlsArray] = useState(urlArray)

    function categorySlug(category) {
        // Divide la cadena en palabras
        const words = category.split(/\s+/);
        // Si hay más de una palabra, se unen con "-"
        if (words.length > 1) {
            return words.join('-').toLowerCase();
        } else {
            return category.toLowerCase();
        }
    }
    const handleDelete = () => {
        onDelete(id);
    };


    useEffect(() => {
        if (urls && urls.trim() !== "") {
            setUrlsArray(urls.split(','));
        } else {
            setUrlsArray([]); // Si urls es nulo o vacío, establecer urlArray como un arreglo vacío
        }
    }, [urls]);


    return (
        <>
            <Container className="container-news" >
                <Card className='cardNews' >
                {/* {
                        urlsArray.length === 0  &&
                        <Card.Img
                            variant="top"
                            src={"https://res.cloudinary.com/caraguatay/image/upload/v1693184996/Logos/escudo_yntmdj.png"
                            }
                            className='cardImg'                           
                        />
                    } */}
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
                            <small> <Link to={`/${categorySlug(category)}`} className="cardLink" > {category} </Link></small>
                        </Card.Text>
                        <Card.Text className="cardLink">
                            <small >  {date} </small>
                        </Card.Text>
                    </Card.Subtitle>
                    <Card.Body className='cardBody card-body'>
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
                    <Link to={`${link}`}><small className='text-muted cardLink' >Leer mas...</small></Link>
                    <Card.Footer className='cardLink'>
                        <EditButton className="size-lg"/>
                        <DeleteButton className="size-lg" 
                        fx={handleDelete}
                        arg={id}
                        />
                    </Card.Footer>
                </Card>
            </Container>

        </>
    )
}