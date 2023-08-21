import React, { useState, useContext, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './admin-users.css';
import { DeleteButton, DisplayButton, EditButton } from '../buttons';
import EditUserForm from './EditUserForm';
import { useModal } from '../../hooks/useModal';

export const UserItem = ({ user }) => {

  //const { deleteUser } = useContext(UserAdminContext);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);

  const [userDB, setUserDB] = useState([]);
  const { show, handleShow, handleClose } = useModal()

   const handleShowUserDetails = async () =>{ 
    try {
      const response = await fetch('http://localhost:4001/api/users/list', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: user.id }), // Send the user ID
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

  const handleCloseUserDetails = () => setShowUserDetails(false);
  const handleShowConfirmDelete = () => setShowConfirmDelete(true);

  const handleCancelDeletion = () => {
    setShowConfirmDelete(false);
  }

  const handleConfirmDeletion = async () => {
   // try {
     // await deleteUser({ id: user.id });
  
    try {
      const response = await fetch("http://localhost:4001/api/users/delete", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ id: user.id })
      });
      if (!response.ok) {
        throw new Error('Error deleting user');
      }
    // Parse the JSON data from the response
    const responseData = await response.json();
    console.log(responseData, "linea 48"); // Log the parsed JSON data
    // Parse the "data" property within the response data to capture the object user
    const userData = JSON.parse(responseData.data);  //Ej. console.log(userData.email)
      // setUsers(users.filter(user => user.enabled === 1));
      console.log(responseData.msg, "linea 72")
     // setAlertMessage(responseData.msg);
      setShowConfirmDelete(false);
      handleClose();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
    // } catch (error) {
    //   console.log(error, "Error desde deletion");
    // }
  };

  useEffect(() => {
    handleClose()
  }, [user])

  return (
    <>   
      <td><img src={user.avatar} alt="" /></td>
      <td>{user.email}</td>
      <td><DisplayButton fx={handleShowUserDetails} arg={user.id} /></td>
      <td><DeleteButton fx={handleShowConfirmDelete} /></td>
      <td><EditButton fx={handleShow} arg={user} /></td>
      <td style={{ display: 'none' }}>{user.id}</td>

      {/* MODAL PARA DESPLEGAR FORM DE EDICION DE USUARIO */}
      <Modal show={show} onHide={handleClose} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="form-title mt-4">Editar usuario administrador</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm user={user} />

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