import {createContext, useState, useEffect} from 'react';
import Avatar from '../../assets/user-avatar.png'

export const UserAdminContext = createContext()

const UserAdminContextProvider  = (props) => {
    const [alertMessage, setAlertMessage] = useState(null);

    const [users, setUsers] = useState([
        { id: 1,  email: "maria.gainza@gmail.com", name: "María", lastName: 'Gainza', role: 'Administrador', password:123456},
        { id: 2,  email: "ada.lovelace@gmail.com", name: "Ada", lastName: 'Lovelace', role: 'Administrador', password:123456},
        { id: 3,  email: "fito.paez@gmail.com", name: "Fito", lastName: 'Paez', role: 'Administrador',password:123456 } 
    ])

    
    
    useEffect(() => {
        setUsers(JSON.parse(localStorage.getItem('users')))
    }, [])
    
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users))
    })

    const addUser = (email, name, lastName, password, role) => {
        setUsers([...users , {id: Date.now(), email, name, lastName, password, role}])
        setAlertMessage(`El usuario fue creado correctamente con el email ${email}.`)
    }

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id))
        setAlertMessage(`El usuario con el id ${id} fue eliminado correctamente.`)
    }

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
        }, 2000);
    
        return () => clearTimeout(timeoutId);
      }, [alertMessage]);
      

        return (
            <UserAdminContext.Provider value={{ users, addUser, deleteUser, updateUser, alertMessage, updateAlertMessage }}>
                {props.children}
            </UserAdminContext.Provider>
        )
    }

export default UserAdminContextProvider;



