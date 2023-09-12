/* CHEQUEAR SI USAMOS O NO ESTE COMPONENTE */

import React from 'react'
import { Card, Container , Carousel} from 'react-bootstrap'
import '../../index.css';
import { NewsItem } from './NewsItem';
import { Loader } from '../buttons/Loader';

export const MoreNews = ( { fetch,  id } ) => {
    const data = fetch(id)
    const { news, loadingCat , errorCat} = data
    
    console.log(news , 'data');

    // const newsFiltered= news.filter(n => n.id != news.id)
   
    if (loadingCat) {
        return <div> <Loader text={'cargando más noticias'} loader={loadingCat} /></div>;
    }
    if (errorCat) {
        return <div>Error: {errorCat.message}</div>;
    }

    return (
        <>
    <Carousel className="carousel-inner-moreNews carousel-dark "  >
        {

            
               /* COMPONENTE QUE RENDERIZA MORE NEWS EN DETALLE DE NOTICIA */
                 (
                    news && 
                    news.map((news, i) => (
                        <Carousel.Item key={`${news.id}-${i}`}>
                            <Card className=''>
                                <NewsItem
                                    category={news.category}
                                    title={news.title}
                                    link={`/noticias/${news.id}`}
                                />
                            </Card>
                        </Carousel.Item>
                    ))
                )
            /* COMPONENTE QUE RENDERIZA MORE NEWS EN DETALLE DE NOTICIA */
        }
    </Carousel>
    </>



    )
}

