import React from 'react';
import {Table} from 'react-bootstrap';
import { UsersList } from '../../assets/data/UsersList';
import {DeleteButton, DisplayButton, EditButton} from '../buttons';


export const UsersTable = () => {
  return (
    <>
      <Table responsive>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Email</th>
        
        </tr>
      </thead>
      <tbody>
          {UsersList.map((user, index) => (
        <tr key={index}>
            <td> <img src={user.avatar} alt="" /></td>
            <td> {user.email}</td>
            <td> {<DisplayButton />}</td>
            <td>{ <DeleteButton />}</td>
            <td>{ <EditButton />}</td>

        </tr>
          ))}
       
      </tbody>
    </Table>
    </>
  )
}


