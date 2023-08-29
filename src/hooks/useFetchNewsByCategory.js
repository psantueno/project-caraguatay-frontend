import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const useFetchNewsByCategory= () => {
    const { id } = useParams();
    const [newsByCat, setNewsByCat] = useState(null);
    const [loadingCat, setLoadingCat] = useState(true);
    const [errorCat, setErrorCat] = useState(null);

    console.log(id, 'este es el id');
  
    useEffect(() => {
      const fetchDataByCat = async () => {
        try {
          if (!id) {
            throw new Error('Error obteniendo noticias con esta categoría declarada');
          }
  
          const sendId = await fetch(`http://localhost:4001/api/noticias/byCategory/${id}`,{
            method: "POST",
            body: JSON.stringify(id),
            headers: { 'Content-Type': 'application/json' }
          }
          );
          if (!sendId.ok) {
              throw new Error('Error obteniendo noticias por categoría');
            } else {
                const response = await fetch(`http://localhost:4001/api/noticias/list/byCategory/${id}`,{
                    method: "GET"
                })
                
                          
                const data = await response.json();
                
                const fetchedNewsByCat = data.data;
                
                setNewsByCat(fetchedNewsByCat);
                setLoadingCat(false);
            }
        } catch (error) {
          setErrorCat(error);
          setLoadingCat(false);
        }
      };
  
      fetchDataByCat();
    }, [id]);
  
    return { newsByCat, loadingCat, errorCat };
}