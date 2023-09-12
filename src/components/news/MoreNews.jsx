/* CHEQUEAR SI USAMOS O NO ESTE COMPONENTE */

import React from 'react'
import { Card, Container, Carousel } from 'react-bootstrap'
import '../../index.css';
import { NewsItem } from './NewsItem';
import { Loader } from '../buttons/Loader';

export const MoreNews = ({ fetch, fetchId, newsId }) => {

    const data = fetch(fetchId)
    const { news, loadingCat, errorCat } = data
    console.log(news, 'data');

    if (loadingCat) {
        return <div> <Loader text={'cargando más noticias'} loader={loadingCat} /></div>;
    }
    if (errorCat) {
        return <div>Error: {errorCat.message}</div>;
    }

    const filteredNews = news.filter((newsItem) => newsItem.id !== newsId);

    console.log(filteredNews, 'esto es filterednews');

    return (
        <>
            {
                /* COMPONENTE QUE RENDERIZA MORE NEWS EN DETALLE DE NOTICIA */
                (
                    (filteredNews !== "") &&

                    filteredNews.map((news, i) => (
                        <Carousel className="carousel-inner-moreNews carousel-dark "  >
                            <Carousel.Item key={`${news.id}-${i}`} >
                                <NewsItem
                                    urlArray={news.urlArray}
                                    urls={news.urls}
                                    category={news.category}
                                    title={news.title}
                                    link={`/noticias/${news.id}`}
                                />
                            </Carousel.Item>
                        </Carousel>
                    ))
                )
                /* COMPONENTE QUE RENDERIZA MORE NEWS EN DETALLE DE NOTICIA */
            }
        </>
    )
}

