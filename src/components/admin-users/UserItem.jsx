import React, { useState, useContext, useEffect } from 'react';
import {  Button,  Modal, Alert } from 'react-bootstrap';
import './admin-users.css';

import { DeleteButton, DisplayButton, EditButton } from '../buttons';
import { UserAdminContext } from './UserAdminContext';
import EditUserForm from './EditUserForm';

export const UserItem = ({ user }) => {

  const { deleteUser } = useContext(UserAdminContext);

  const [show, setShow] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false);

  const handleShowConfirmDelete = () => { 
    setUserIdToDelete(user.id);
    setShowConfirmDelete(true);
  }
  const handleCancelDeletion = () => {
    setShowConfirmDelete(false);
  }

  const handleConfirmDeletion = (user) => { 
    deleteUser(userIdToDelete);
    setShowConfirmDelete(false);
  }

  useEffect(() =>{
    handleClose()
  }, [user])

  

  return (
    <>
    
      <td> <img src={user.avatar} alt="" /></td>
      <td> {user.email}</td>
      <td> <DisplayButton /></td>
      <td> <DeleteButton fx={handleShowConfirmDelete}  /></td>
      <td> <EditButton fx={handleShow} arg={user} /></td>


      
      {/* MODAL PARA DESPLEGAR FORM DE CREACIÓN DE USUARIO */}

      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="form-title mt-4">Editar usuario administrador</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm userToEdit={user}/>

          <Modal.Footer>
            <Button onClick={handleClose}>
              Volver al listado
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>


      {/* MODAL PARA DESPLEGAR CONFIRMACIÓN DE ELIMINACIÓN DE USUARIO */}

      <Modal show={showConfirmDelete} onHide={handleClose} className="mt-5 p-4">
        
        <Modal.Body>
            <h3 className="form-title mt-4">¿Confirma que desea eliminar el usuario registrado con el siguiente email?</h3>
            <p className="data-highlight">{user.email}</p>
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

     
      
    </>
  )
}