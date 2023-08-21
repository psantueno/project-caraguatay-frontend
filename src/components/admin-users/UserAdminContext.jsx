import { createContext, useState, useEffect } from 'react';

export const UserAdminContext = createContext()

const UserAdminContextProvider = (props) => {
  const [alertMessage, setAlertMessage] = useState(null);
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch('http://localhost:4001/api/users/list/all');
  //       if (!response.ok) {
  //         throw new Error('Error fetching users');
  //       }
  //       const data = await response.json();
  //       const fetchedUsers = data.result.usuarios;
  //       setUsers(fetchedUsers);
  //     } catch (error) {
  //       console.error('Error fetching users:', error);
  //     }
  //   };
  //   fetchUsers();
  // }, []);
 
// const deleteUser = async (id) => {
//     console.log(JSON.stringify(id), "desde deleteUser function");
//     try {
//       const response = await fetch("http://localhost:4001/api/users/delete", {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json'},
//         body: JSON.stringify(id),
//       });
//       if (!response.ok) {
//         throw new Error('Error deleting user');
//       }
//     // Parse the JSON data from the response
//     const responseData = await response.json();
//     console.log(responseData, "linea 48"); // Log the parsed JSON data
//     // Parse the "data" property within the response data to capture the object user
//     const userData = JSON.parse(responseData.data);  //Ej. console.log(userData.email)
//       // setUsers(users.filter(user => user.enabled === 1));
//       setAlertMessage(responseData.msg)
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   }
    

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => user.id === id ? updatedUser : user))
    setAlertMessage(`El usuario con id ${id} fue actualizado correctamente.`)
  }

 

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setAlertMessage(null);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [alertMessage]);


  return (
    <UserAdminContext.Provider value={{ 
  //    users,
  //    deleteUser, 
      updateUser, 
      alertMessage, 

   //   setUsers, 
      }}>
      {props.children}
    </UserAdminContext.Provider>
  )
}

export default UserAdminContextProvider;



