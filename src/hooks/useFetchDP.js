import React, {useState, useEffect} from 'react'

export const useFetchDP = () => {
    const [newsDp, setNewsDp] = useState([]);

    const getNewsDP = async () => {
        const response = await fetch('http://localhost:4001/api/puntoDigital/list/all');
        if (!response.ok) {
            throw new Error('Error obteniendo Eventos de Punto Digital. Por favor reintente nuevamente.');
        }
        const data = await response.json();
        const fetchedNewsDp = data.result.newsDp;
        console.log(fetchedNewsDp)
        setNewsDp(fetchedNewsDp)
    }

    useEffect(() => {
        getNewsDP();
    }, []);

    return {
        news: newsDp
    }  
}