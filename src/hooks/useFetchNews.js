import { useEffect, useState } from "react";


export const useFetchNews = () => {

    const [news, setNews] = useState([]);

    const getNews = async () => {
        const response = await fetch('http://localhost:4001/api/noticias/list/all');
        
        if (!response.ok) {
            throw new Error('Error obteniendo noticias');
        }

        const data = await response.json();
        const fetchedNews = data.result.news;
        setNews(fetchedNews)
    }

    useEffect(() => {
        getNews();
    }, []);

    return {
        news: news
    }
}