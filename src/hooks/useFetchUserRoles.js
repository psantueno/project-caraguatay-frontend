import { useEffect, useState } from "react";

export const useFetchUserRoles = () => {
    const [userRoles, setuserRoles] = useState([]);

    const getUserRoles = async () => {
        try {
            const res = await fetch('http://localhost:4001/api/users/roles');

            if (!res.ok) {
                throw new Error('Error obteniendo roles');
            }
            const data = await res.json();
            const fetcheRoles = data.result.userRoles;
            setuserRoles(fetcheRoles)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserRoles();
    }, []);

    return {
        userRoles: userRoles
    }
}