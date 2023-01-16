
import React from 'react'

export const NewsDetail = () => {
  return (
   
<>
<div data-toggle="collapse" data-target="#news">

           <Card className='cardNews' id="news">
               <Card.Img variant="top" src={photo} className='cardImg' />
                   <Card.Subtitle className="cardSubtitle"> 
                           <Card.Text className="cardCategory">
                               <small> <Link to="#"className="cardLink" > Categoría </Link></small>
                           </Card.Text>
                           <Card.Text className="cardLink">
                               <small >  15/01/2023 </small>
                           </Card.Text>
                   </Card.Subtitle>
               <Card.Body className='cardBody'>
                   <Card.Title className='cardTitle'>Titulo de la Noticia en dos lineas</Card.Title>
                   <Card.Text className='cardText' >
                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, at hic. Molestias nihil repellendus velit quasi animi ducimus sint, perspiciatis sunt, cum quia magni praesentium iure accusamus minus provident possimus!
                   </Card.Text>
               </Card.Body>
               <Card.Footer className='cardLink'>
                   <small className='text-muted ' ><Link to="#" className='cardLink'> Leer mas...</Link></small>
               </Card.Footer>
           </Card>
</div>
         
       
   </>
  )
}

