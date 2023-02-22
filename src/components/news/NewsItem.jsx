import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import photo1 from '../../assets/images/news.jpg'
import '../../index.css';


export const NewsItem = ({

    photo = { url: photo1 },
    category = "Categoría",
    date = '15/01/2023',
    title = 'Titulo de la Noticia en dos lineas',
    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus!',
    link = "/noticias/1"

}) => {



    return (
        <>
            <Container className="container-news" >
                <Card className='cardNews' >
                    <Card.Img variant="top" src={photo1} className='cardImg' />
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
                            {text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='cardLink'>
                        <small className='text-muted ' ><Link to={link} className='cardLink'> Leer mas...</Link></small>
                    </Card.Footer>
                </Card>
            </Container>

        </>
    )
}

