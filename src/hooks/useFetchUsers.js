import { useEffect, useState } from "react";


export const useFetchUsers = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {

          const response = await fetch('http://localhost:4001/api/users/list/all');
        
        if (!response.ok) {
            throw new Error('Error obteniendo noticias');
        }

        const data = await response.json();
        const fetchedUsers = data.result.usuarios;
        setUsers(fetchedUsers);
    }

    useEffect(() => {
        getUsers();
    }, []);

    

    return {
        users:users
    }
}