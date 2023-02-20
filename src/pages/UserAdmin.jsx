import React from 'react';
import {UsersTable} from '../components/admin-users/UsersTable';
import {Container, Col, Row, Button} from 'react-bootstrap';

export const UserAdmin = () => {
  return (
    <>
    <Container className="mt-4">
        <h3 className="mt-5">Administración de usuarios</h3>
        <p className="mt-3">Cree, modifique o elimine usuarios administradores del sitio desde aquí.</p>
    </Container>

    <Container className="mt-4">
        <Row>
            <Col className="mb-2">
                <h3 >Lista de usuarios</h3>
            </Col>
            <Col>
                <Button><i className="fas fa-user-plus"></i> Crear usuario</Button>
            </Col>
        </Row>
    </Container>

    <Container>
        <UsersTable />
    </Container>



    
      
    </>
  )
}


