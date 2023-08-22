import React, { useState, useContext, useEffect } from 'react';
import { Table, Container, Col, Button, Row, Modal, Alert } from 'react-bootstrap';
import './admin-users.css';
import { CreateUserForm } from './CreateUserForm';
import { useModal } from '../../hooks/useModal';
import { DeleteButton, DisplayButton, EditButton } from '../buttons';
import { useForm } from "../../hooks/useForm";
import EditUserForm from './EditUserForm';

export const UsersTable = () => {

  const { show, handleShow, handleClose } = useModal()
  const [users, setUsers] = useState([]);
  const [userDB, setUserDB] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showEditUserForm, setShowEditUserForm] = useState(false);
  const handleCloseUserDetails = () => setShowUserDetails(false);
  const handleCancelDeletion = () => setShowConfirmDelete(false);
  const [selectedUserForDeletion, setSelectedUserForDeletion] = useState(null);
  const [selectedUserForEdition, setSelectedUserForEdition] = useState(null);
  const handleCloseEdit = () => setShowEditUserForm(false);

  const handleShowConfirmDelete = (user) => {
    setSelectedUserForDeletion(user);
    setShowConfirmDelete(true);
  };

  const handleShowEditUserForm = (user) => {
    setSelectedUserForEdition(user);
    setShowEditUserForm(true);
  };

  const {
    setResponseMsg,
    setShowResOk,
    setShowResBad,
    showResOk,
    showResBad,
    responseMsg,
  } = useForm();


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

  useEffect(() => {
    fetchUsers();
  }, [selectedUserForDeletion]);  // no actualiza al eliminar

  const handleShowUserDetails = async (user) => {
    try {
      const response = await fetch('http://localhost:4001/api/users/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user.id }),
      });

      if (!response.ok) {
        throw new Error('Error fetching user');
      }

      const data = await response.json();

      if (data.result.status === 200) {
        setUserDB(data.result.userDB);
        setShowUserDetails(true);
      } else {
        console.error('User not found');
      }
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleConfirmDeletion = async () => {
    const id = selectedUserForDeletion.id
    try {
      const response = await fetch("http://localhost:4001/api/users/delete", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (!response.ok) {
        throw new Error('Error deleting user');
      }
      const responseData = await response.json(); // Parse the JSON data from the response
      // Parse the "data" property within the response data to capture the object user
      //const userData = JSON.parse(responseData.data);  //Ej. console.log(userData.email)
      console.log(responseData.msg, "linea 72");
      setResponseMsg(responseData);
      if (responseData.status === 201) {
        setShowResOk(true);
        setShowResBad(false);
      } else {
        setShowResBad(true);
        console.log("-------------------")
        console.log(responseData.errors)
        console.log("-------------------")
      }
      setShowConfirmDelete(false);
      handleClose();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    handleClose()
  }, [userDB])

  useEffect(() => {
    handleClose();
  }, [users])

  return (
    <>
      {/* RESPUESTA OK DEL RESPONSE */}
      <Alert show={showResOk} variant="primary" className="mt-2">
        <Row>
          <Col>
            <p> {responseMsg && responseMsg.msg ? responseMsg.msg : null} </p>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              onClick={() => setShowResOk(false)}>
              Cerrar
            </Button>
          </Col>
        </Row>
      </Alert>
      {/* RESPUESTA OK DEL RESPONSE */}

      {/* RESPUESTA BAD DEL RESPONSE */}

      <Alert show={showResBad} variant="danger" className="mt-2">
        <Row>
          <Col>
            <p>{responseMsg && responseMsg.errors
              ? responseMsg.errors.map((field, index) => (
                <li key={index}>{field.msg}</li>
              ))
              : null
            }</p>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button
              variant='danger'
              onClick={() => setShowResBad(false)}>
              Cerrar
            </Button>
          </Col>
        </Row>
      </Alert>
      {/* RESPUESTA BAD DEL RESPONSE */}


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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              {/* <UserItem user={user}  /> */}
              <td><img src={user.avatar} alt="" /></td>
              <td>{user.email}</td>
              <td><DisplayButton fx={handleShowUserDetails} arg={user} /></td>
              <td><DeleteButton fx={handleShowConfirmDelete} arg={user} /></td>
              <td><EditButton fx={handleShowEditUserForm} arg={user} /></td>
              <td style={{ display: 'none' }}>{user.id}</td>
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

      {/* MODAL PARA DESPLEGAR FORM DE EDICION DE USUARIO */}
      <Modal show={showEditUserForm} onHide={handleCloseEdit} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="form-title mt-4">Editar usuario administrador</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm user={selectedUserForEdition} />

          <Modal.Footer>
            <Button onClick={handleCloseEdit}>
              Volver al listado
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>

      {/* MODAL PARA DESPLEGAR CONFIRMACIÓN DE ELIMINACIÓN DE USUARIO */}
      <Modal show={showConfirmDelete} onHide={handleClose} className="mt-5 p-4">
        <Modal.Body>
          <h3 className="form-title mt-4">¿Confirma que desea eliminar el usuario registrado con el siguiente email?</h3>
          <p className="data-highlight">
            {selectedUserForDeletion && selectedUserForDeletion.email
              ? selectedUserForDeletion.email
              : 'No user selected'}
          </p>
          <Modal.Footer>
            <Button onClick={handleCancelDeletion}>
              Cancelar
            </Button>
            <Button onClick={handleConfirmDeletion}>
              Sí, eliminar
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>

      {/* MODAL PARA DESPLEGAR USUARIO */}
      <Modal show={showUserDetails} onHide={handleCloseUserDetails} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="form-title mt-4">Detalle de usuario administrador</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="form-title mt-4">Dirección de e-mail:</p>
          <p>{userDB.email}</p>
          <p className="form-title mt-4">Nombre:</p>
          <p>{userDB.name}</p>
          <p className="form-title mt-4">Apellido:</p>
          <p>{userDB.lastName}</p>
          <p className="form-title mt-4">Rol:</p>
          <p>{userDB.role}</p>
          <p className="form-title mt-4">Imagen:</p>
          <img src={userDB.avatar} alt="" />

          <Modal.Footer>
            <Button onClick={handleCloseUserDetails} >
              Volver al listado
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  )
}


