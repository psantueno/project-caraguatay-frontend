import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const usefetchNewsById = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [idCat, setIdCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingFetch, setLoadingFetch] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) {
          throw new Error('El ID de la noticia no está definido');
        }

        const response = await fetch(`http://localhost:4001/api/noticias/${id}`);

        if (!response.ok) {
          throw new Error('Error al obtener los detalles de la noticia');
        }

        const data = await response.json();

        const { news, newsCategory_id } = data;

        setNews(news);
        setIdCat(newsCategory_id);
        setLoading(false);
        setLoadingFetch(false);

      } catch (error) {
        setError(error.message || 'Hubo un error al obtener los detalles de la noticia');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { news, loading, loadingFetch, error, idCat, id };
};
