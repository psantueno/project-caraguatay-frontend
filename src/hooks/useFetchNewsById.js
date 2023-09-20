import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const usefetchNewsById = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [idCat, setIdCat] = useState (null)
    const [loadingFetch, setLoadingFetch] = useState(true);
    const [error, setError] = useState(null);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (!id) {
            throw new Error('Error obteniendo noticias con este ID declarado');
          }
  
          const response = await fetch(`http://localhost:4001/api/noticias/${id}`);
     
          if (!response.ok) {
              throw new Error('Error obteniendo noticias');
            }
            
            const data = await response.json();
          
          const {news, newsCategory_id} = data ;
          
    
  
          setNews(news);
          setIdCat(newsCategory_id)
          setLoadingFetch(false);
        } catch (error) {
          setError(error);
          setLoadingFetch(false);
        }
      };
  
      fetchData();
    }, [id]);
  
    return { news, loadingFetch, error , idCat};
  };
  