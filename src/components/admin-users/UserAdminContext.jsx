import { createContext, useState, useEffect } from 'react';

export const UserAdminContext = createContext()

const UserAdminContextProvider = (props) => {
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

  


 
const deleteUser = async (id) => {
    console.log(JSON.stringify(id), "desde deleteUser function");
    try {
      const response = await fetch(`http://localhost:4001/api/users/delete/${id}`, {
        method: 'PUT',
        body: JSON.stringify(id),
        headers: { 'Content-Type': 'application/json'}
      });
      console.log(response, "linea 41");
      if (!response.ok) {
        throw new Error('Error deleting user');
      }

      setUsers(users.filter(user => user.enabled === 1));
      setAlertMessage(`El usuario con el ID ${id} fue eliminado correctamente.`);
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle error and display appropriate message to the user
    }

    // setUsers(users.filter(user => user.id !== id))
    // setAlertMessage(El usuario con el email ${id} fue eliminado correctamente.)
  }
    // setUsers(users.filter(user => user.id !== id))
    // setAlertMessage(`El usuario con el email ${id} fue eliminado correctamente.`)
  

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
    <UserAdminContext.Provider value={{ 
      users,
      deleteUser, 
      updateUser, 
      alertMessage, 
      updateAlertMessage, 
      setUsers, 
      }}>
      {props.children}
    </UserAdminContext.Provider>
  )
}

export default UserAdminContextProvider;



