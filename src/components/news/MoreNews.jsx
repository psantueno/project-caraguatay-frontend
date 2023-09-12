/* CHEQUEAR SI USAMOS O NO ESTE COMPONENTE */

import React from 'react'
import { Card, Container, Carousel } from 'react-bootstrap'
import '../../index.css';
import { NewsItem } from './NewsItem';
import { Loader } from '../buttons/Loader';

export const MoreNews = ({ fetch, fetchId, newsId }) => {

    const typeOfId = typeof newsId
    console.log(newsId, typeOfId)

    const data = fetch(fetchId)
    const { news, loadingCat, errorCat } = data
    console.log(news, 'data', 'y newsId', newsId, 'typeof:', typeOfId);

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
                filteredNews == "" ? (
                    <div>
                        <p>No hay más noticias asociadas</p>
                    </div>
                ) : (
                    <Carousel className="carousel-inner-moreNews carousel-dark ">
                        {filteredNews.map((news, i) => (
                            <Carousel.Item key={`${news.id}-${i}`}>
                                <NewsItem
                                    urlArray={news.urlArray}
                                    urls={news.urls}
                                    category={news.category}
                                    title={news.title}
                                    link={`/noticias/${news.id}`}
                                />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )
            }
        </>
    )
}

