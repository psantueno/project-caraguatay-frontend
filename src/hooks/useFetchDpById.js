import React, { useEffect, useState } from 'react'

export const useFetchDpById = (id) => {

console.log(id,"este es ID de fetchDP");
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

                const response = await fetch("http://localhost:4001/api/punto-digital/list", {
                    method: "POST",
                    headers: {'Content-Type': "application/json"},
                    body: JSON.stringify({id:id})
                  });
                console.log(response, 'response despues del fetch');

                if (!response.ok) {
                    throw new Error('Error al obtener los detalles del Evento con este ID');
                }
                
                const data = await response.json();

            const dpNew = data.result.dpNew; // Accede a dpNew correctamente

                setEventsDp(dpNew);
               
               
            } catch (error) {
                setError(error.message || 'Hubo un error al obtener los detalles del Evento.');
                setLoadingFetch(false);
            }
        };

        fetchData();
    }, [id]);

    return { eventsDp, loadingFetch, error};
};


