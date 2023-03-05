import {createContext, useEffect, useState} from 'react';
import Avatar from '../../assets/user-avatar.png'

export const UserAdminContext = createContext()

const UserAdminContextProvider  = (props) => {

    const [users, setUsers] = useState([
        { id: 1, avatar: [Avatar], email: "maria.gainza@gmail.com", name: "María", lastName: 'Gainza', role: 'Administrador',},
        { id: 2, avatar: [Avatar], email: "ada.lovelace@gmail.com", name: "Ada", lastName: 'Lovelace', role: 'Administrador', },
        { id: 3, avatar: [Avatar], email: "fito.paez@gmail.com", name: "Fito", lastName: 'Paez', role: 'Administrador', } ])

// useEffect(()=> {
//     setUsers(JSON.parse(localStorage.getItem('users')))
// },[])

// useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
// })

// const sortedUsers = users.sort((a,b)=>(a.name < b.name ? -1 : 1));

const addUser = (avatar, email, name, lastName, role) => {
    setUsers([...users , {id: 4, avatar, email, name, lastName, role}])
}

const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
}

// const updateUser = (id, updatedUser) => {
//     setUsers(users.map((user) => user.id === id ? updatedUser : user))
// }

    return (
        <UserAdminContext.Provider value={{ users, addUser, deleteUser}}>
            {props.children}
        </UserAdminContext.Provider>
    )
}

export default UserAdminContextProvider;
