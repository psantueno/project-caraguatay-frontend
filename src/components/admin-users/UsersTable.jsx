import React, { useState, useContext } from 'react';
import {Table} from 'react-bootstrap';

import {DeleteButton, DisplayButton, EditButton} from '../buttons';
import './admin-users.css';
import EditUser from './EditUser';
//import { UserAdminContext } from './UserAdminContext';



export const UsersTable = ({users}) => {
  
  //const {users} = useContext(UserAdminContext);
  
  const [userData, setUserData] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setUserData(user)
    setShow(true)
  };


  return (
    <>
      

      <Table responsive size="sm" className="table-users">
      <thead>
        <tr>
          <th></th>
          <th>Email</th>
          <th></th>
          <th></th>
          <th></th>
        
        </tr>
      </thead>
      <tbody>
          {users.map((user, index) => (
        <tr key={index}>
            <td> <img src={user.avatar} alt="" /></td>
            <td> {user.email}</td>
            <td> <DisplayButton /></td>
            <td> <DeleteButton /></td>
            <td> <EditButton fx={handleShow} arg={user} /></td>

        </tr>
          ))}
       
      </tbody>
    </Table>

    <EditUser show={show} onClose={handleClose} userData={userData}/>
    </>
  )
}


