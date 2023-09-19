import { useEffect, useState } from "react";


export const useFetchNews = () => {

    const [news, setNews] = useState([]);

    const getNews = async () => {
        const response = await fetch('http://localhost:4001/api/noticias/list/all');
        // const response = await fetch('http://sql10.freesqldatabase.com:4001/api/noticias/list/all', {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': 'Basic ' + btoa('sql10645384@sql10.freesqldatabase.com:ke9FlVBFd1')
        //     }
        // });
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