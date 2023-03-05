import React, { useContext, useEffect, useState } from 'react';
import {UsersTable} from '../components/admin-users/UsersTable';
import {Container, Col, Row, Button} from 'react-bootstrap';
import { CreateUser } from '../components/admin-users/CreateUser';
import { UserAdminContext } from '../components/admin-users/UserAdminContext';

export const UserAdmin = () => {

    const {users} = useContext(UserAdminContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleClose()
    }, [users])

  return (
    

    <>
    
    <Container className="mt-4">
        <h4 className="mt-4 form-title" >Administración de usuarios</h4>
        <p className="mt-3">Cree, modifique o elimine usuarios administradores del sitio desde aquí.</p>
    </Container>

   

    <Container className="mt-4">
        <Col className="text-end">
            <Button onClick={handleShow}><i className="fas fa-user-plus" ></i> Crear usuario</Button>
        </Col>

        <Row className="mb-2 mt-2">
            <h5 className="form-title">Lista de usuarios</h5>
        </Row>
    </Container>

    <Container>
        <UsersTable users={users}/>
    </Container>


        {/* Pasar a modal  */}
        <CreateUser  show={show} onClose={handleClose} />
    
      
    </>
  )
}


