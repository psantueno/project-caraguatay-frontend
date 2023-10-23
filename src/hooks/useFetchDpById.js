import React from 'react'

export const useFetchDpById = () => {

    const { id } = useParams();
    const [eventsDp, setEventsDp] = useState(null);
    const [idCat, setIdCat] = useState(null);
    const [loadingFetch, setLoadingFetch] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    throw new Error('El ID del evento no está definido');
                }

                const response = await fetch(`http://localhost:4001/api/puntodigital/update/${id}`);

                if (!response.ok) {
                    throw new Error('Error al obtener los detalles del Evento con este ID');
                }

                const data = await response.json();

                const { news, newsCategory_id } = data;

                setEventsDp(news);
                setIdCat(newsCategory_id);
                setLoadingFetch(false);

            } catch (error) {
                setError(error.message || 'Hubo un error al obtener los detalles del Evento.');
                setLoadingFetch(false);
            }
        };

        fetchData();
    }, [id]);

    return { eventsDp, loadingFetch, error, idCat, id };
};


