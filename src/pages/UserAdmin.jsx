import React from 'react';
import { UsersTable } from '../components/admin-users/UsersTable';
import { Container, Alert } from 'react-bootstrap';
import UserAdminContextProvider from '../components/admin-users/UserAdminContext';

export const UserAdmin = () => {
   
  return (

    <>
      
    
    <Container className="mt-4">
        <h4 className="mt-4 form-title" >Administración de usuarios</h4>
        <p className="mt-3">Cree, modifique o elimine usuarios administradores del sitio desde aquí.</p>
    </Container>

 
        <UserAdminContextProvider>
            <UsersTable />
        </UserAdminContextProvider>

      
    </>
  )
}


