import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const usefetchNewsById = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [idCat, setIdCat] = useState (null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // console.log(id, 'este es el id');
  
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
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);
  
    return { news, loading, error , idCat};
  };
  