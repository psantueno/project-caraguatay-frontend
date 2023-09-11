import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const useFetchNewsByCategory = ( id ) => {

  const [news, setNews] = useState(null);
  const [loadingCat, setLoadingCat] = useState(true);
  const [errorCat, setErrorCat] = useState(null);


  const fetchDataByCat = async () => {
    try {
      if (!id) {
        throw new Error('Error obteniendo noticias con esta categoría declarada');
      }

      const response = await fetch(`http://localhost:4001/api/noticias/list/byCategory/${id}`)
      if (!response.ok) {
        throw new Error('Error obteniendo noticias por categoría');
      }

      const data = await response.json();
     

      const dataResultNews = data.result.news;


      setNews(dataResultNews);
      setLoadingCat(false);

    } catch (error) {
      setErrorCat(error);
      setLoadingCat(false);
    }
  };
  useEffect(() => {
      fetchDataByCat();
  }, [id]);

  return { news, loadingCat, errorCat };
}