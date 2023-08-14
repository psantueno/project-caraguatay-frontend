import {createContext, useState, useEffect} from 'react';

export const UserAdminContext = createContext()

const UserAdminContextProvider  = (props) => {
    const [alertMessage, setAlertMessage] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:4001/api/users/list/all');
            if (!response.ok) {
              throw new Error('Error fetching users');
            }
            const data = await response.json();
            const fetchedUsers = data.result.usuarios;
            setUsers(fetchedUsers);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
      }, []);


    // const deleteUser = ({id, email}) => {
    //     setUsers(users.filter(user => user.id !== id))
    //     setAlertMessage(`El usuario con el email ${email} fue eliminado correctamente.`)
    // }

    const updateUser = (id, updatedUser) => {
        setUsers(users.map((user) => user.id === id ? updatedUser : user))
        setAlertMessage(`El usuario con id ${id} fue actualizado correctamente.`)
    }

    const updateAlertMessage = (message) => {
        setAlertMessage(message);
      }

      useEffect(() => {
        const timeoutId = setTimeout(() => {
            setAlertMessage(null);
        }, 5000);
    
        return () => clearTimeout(timeoutId);
      }, [alertMessage]);
      

        return (
            <UserAdminContext.Provider value={{ users,  updateUser, alertMessage, updateAlertMessage, setUsers }}>
                {props.children}
            </UserAdminContext.Provider>
        )
    }

export default UserAdminContextProvider;



