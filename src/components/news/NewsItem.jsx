import React, { useState } from 'react'
import { Card, Container, Collapse } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import photo1 from '../../assets/images/news.jpg'
import '../../index.css';


export const NewsItem = ({
   

    photo = { url: photo1 },
    category = {category},
    date = {date},
    title = {title},
    text = {mainText},
    // link = {link}

}) => {
    const [open, setOpen] = useState(false);
    const [textCollpase, setTextCollapse] = useState({})

    const textCollapsed=  () => {
        
        setOpen(!open),
        setTextCollapse(textCollpase)
        
        
        }




       
        




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
                                {
                                    <>
                            

                            { text.length < 100  ? {text} : 
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

