import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../index.css';

export const MoreNews = ({
    id= "",
    category = "",
    date = "",
    title = "",
    mainText = "",
    link = ""
}) => {



    return (
        <Container className='moreNews-container'>


        <Card border="info" style={{ width: '18rem' }} className='cardNews'>
            <Card.Header>
                <Card.Text className="cardCategory">
                    <small> <Link to="#" className="cardLink" > {category} </Link></small>
                </Card.Text>
                <Card.Text className="cardLink">
                    <small >  {date} </small>
                </Card.Text>
            </Card.Header>
            <Card.Body>

                <Card.Title className='cardTitle'>{title}</Card.Title>
                <Card.Text className='cardText'>
                    {
                        <>
                            {mainText.length < 150 ? mainText :
                                <>
                                    {`${mainText.slice(0, 150)}...`}
                                </>
                            }
                        </>
                    }
                    <small className='text-muted ' ><Link to={link} className='cardLink'> Leer mas...</Link></small>
                </Card.Text>
                <Card.Footer className='cardLink'>
                </Card.Footer>
            </Card.Body>
        </Card>
        </Container>


    )
}
