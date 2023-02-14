
import React from 'react'
import { Card, Container, Button, Carousel, Col , Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {ButtonGeneric} from '../ButtonGeneric'
import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
//import { Header } from '../header/Header'
import '../../index.css';
import { NewsItem } from './NewsItem'

export const NewsDetail = () => {
    return (

        <>
        <Row >
        <Col xs={12}  lg={9}>
             
              <Card className='card-lg' >
                   
                    <Card.Header data-ride="carousel "  className='carousel-slide ' col-lg-12="true" >
                        <Carousel className="carousel-inner carousel-dark" >
                            <div className="carousel-item " interval={3000}>
                                <Card.Img src={slide2} alt="..." className=' slide ' />
                            </div>
                            <div className="carousel-item  " interval={3000}>
                                <Card.Img variant="" src={slide1} alt="..." className='slide  ' />
                            </div>
                        </Carousel>
                    </Card.Header>
                    

                    <Card.Subtitle className="cardSubtitle" >
                        <Card.Text className="cardCategory">
                            <small> <Link to="#" className="cardLink-lg" > Categoría </Link></small>
                        </Card.Text>
                        <Card.Text className="cardLink-lg">
                            <small >  15/01/2023 </small>
                        </Card.Text>
                    </Card.Subtitle>
                    <Card.Body className='cardBody'>
                        <Card.Title className='cardTitle'>Titulo de la Noticia en dos lineas</Card.Title>
                        <Card.Text className='cardText' >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus!<br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus! <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus!
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus!<br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus! <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='cardLink'>
                            
                            
                            <Link to="/">   
                            
                            <ButtonGeneric text="<< Volver a noticias" /> 
                            
                            </Link>
                           
                            
                    </Card.Footer>
              </Card>
        </Col>
        
        <Col xs={12} md={12} lg={3} d-block >
                      
            <h4> <strong> Mas noticias.. </strong></h4>
       
        <Row >
          
        
           <Carousel className="carousel-inner-moreNews active carousel-dark" >
                            <div className="carousel-item  "  >
                                <div className='cards-wrapper '  interval={3000} >
                                    <NewsItem className=' slide-moreNews 'text />
                                    
                                </div>
                            </div>
                            <div className="carousel-item "  >
                                <div className='cards-wrapper'  interval={3000}>
                                    <NewsItem className=' slide-moreNews' text  />
                                </div>
                            </div>
                            <div className="carousel-item "  >
                                <div className='cards-wrapper'  interval={3000}>
                                    <NewsItem className=' slide-moreNews 'text />
                                </div>
                            </div>
                           
            </Carousel>


        </Row>
           
            
        </Col>
        </Row>
        


        </>
    )
}

