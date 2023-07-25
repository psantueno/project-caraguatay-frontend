import React, { useState, useContext, useEffect } from 'react';
import { Table, Container, Col, Button, Row, Modal, Alert } from 'react-bootstrap';
import './admin-users.css';
import {UserItem} from './UserItem';
import { CreateUserForm } from './CreateUserForm';
import { UserAdminContext } from './UserAdminContext';

export const UsersTable = () => {

  const { users, alertMessage } = useContext(UserAdminContext);

  // Reemplazar Show y Close por
  //const { show, handleShow, handleClose } = useModal()
  // import { useModal } from '../../../../hooks/useModal';
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false);
  // Fin de lo que tengo que reemplazar.
 
  useEffect(() =>{
    handleClose();
  }, [users])

  return (
    <>

      {alertMessage && (
        <Alert  >
          {alertMessage}
        </Alert>
      )}

      <Container className="mt-4">
        <Col className="text-end">
          <Button onClick={handleShow}><i className="fas fa-user-plus" ></i> Crear usuario</Button>
        </Col>

        <Row className="mb-2 mt-2">
          <h5 className="form-title">Lista de usuarios</h5>
        </Row>
      </Container>

  

      <Table responsive size="sm" className="table-users mb-4">
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
              <UserItem user={user} />
            </tr>
          ))}

        </tbody>
      </Table>

{/* MODAL PARA DESPLEGAR FORM DE CREACIÓN DE USUARIO */}

      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="form-title mt-4">Crear un nuevo usuario administrador</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateUserForm />

          <Modal.Footer>
            <Button onClick={handleClose}>
              Volver al listado
            </Button>          
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}


