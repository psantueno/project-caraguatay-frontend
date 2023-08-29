import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const usefetchNewsById = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);
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
          
          const fetchedNewsById = data.data;
  
          setNews(fetchedNewsById);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [id]);
  
    return { news, loading, error };
  };
  