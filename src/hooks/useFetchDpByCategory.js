import React, { useState, useEffect } from 'react'

export const useFetchDpByCategory = ( id ) => {
    // console.log('este es el id de Categoria que recibe el useFetchDpByCategory:', id);

    const [eventsDp, setEventsDp] = useState(null);
    const [loadingCat, setLoadingCat] = useState(true);
    const [errorCat, setErrorCat] = useState(null);

    const fetchDataByCat = async () => {


        try {
            if (!id) {
                throw new Error('Error obteniendo Eventos de Punto Digital con esta categoría declarada');
            } else {

                const response = await fetch(`http://localhost:4001/api/punto-digital/list/byCategory/${id}`)
                // console.log(response, "esto es RESPONSE")

                if (!response.ok) {
                    throw new Error('Error obteniendo eventos de Punto Digital por categoría');
                }

                const dataDpByCat = await response.json();
                // console.log(dataDpByCat, 'este es response');

                const dataResultNews = dataDpByCat.result.eventsDp;
                // console.log('dataResultNews', dataResultNews)

                setEventsDp(dataResultNews);
                setLoadingCat(false);

            }

        } catch (error) {
            setErrorCat(error);
            setLoadingCat(false);
        }
    }

    useEffect(() => {
        fetchDataByCat()        
        window.scrollTo(0, 0);

    }, [id]);

    return { eventsDp, loadingCat, errorCat };


}

