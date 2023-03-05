import React, { useState, useContext } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './admin-users.css';
//import GenericAvatar from '../../assets/user-avatar.png';
import { UserAdminContext } from './UserAdminContext';


export const CreateUser = ({ show, onClose }) => {

    const {addUser} = useContext(UserAdminContext);

    const [newUser, setNewUser] = useState({
        email:"", name:"", lastName:"", password:"", role:"", avatar:""
    });

    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [password, setPassword] = useState("");
    // const [role, setRole] = useState("");
    // const [avatar, setAvatar] = useState("");

    const onInputChange = (e) => {
        setNewUser({...newUser,[e.target.name]: e.target.value})
    }

    const { email, name, lastName, password, role, avatar } = newUser;

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(email, name, lastName, password, role, avatar);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Modal show={show} onHide={onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h3 className="form-title mt-4">Crear un nuevo usuario administrador</h3>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Complete los datos requeridos para crear un nuevo usuario administrador.</p>
                        <p>El usuario tendrá permisos de edición para crear, modificar y eliminar contenido en el sitio.</p>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Dirección de e-mail:</Form.Label>
                            <Form.Control
                                value={email}
                                onChange = { (e) => onInputChange(e)}
                                type="email"
                                name="email"
                                placeholder="Ingrese el email de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="name"
                                value={name}
                                onChange = { (e) => onInputChange(e)}
                                type="text"
                                placeholder="Ingrese el nombre de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                name="lastName"
                                value={lastName}
                                onChange = { (e) => onInputChange(e)}
                                type="text"
                                placeholder="Ingrese el apellido de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                name="password"
                                value={password}
                                onChange = { (e) => onInputChange(e)}
                                type="password"
                                placeholder="Elija la contraseña original." />
                        </Form.Group>

                        <Form.Select
                            name="role"
                            value={role}
                            onChange = { (e) => onInputChange(e)}>
                            <option>Rol</option>
                            <option value="Administrador">Administrador</option>
                        </Form.Select>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control
                                type="file"
                                name="avatar"
                                accept="image/png , image/jpeg, image/jpg" 
                                file={avatar}
                                onChange = { (e) => onInputChange(e)}                              
                                />
                        </Form.Group>


                        <Modal.Footer>
                            <Button onClick={onClose}>
                                Volver al listado
                            </Button>
                            <Button type="submit">
                                Crear
                            </Button>
                        </Modal.Footer>

                    </Modal.Body>
                </Modal>
            </Form>

        </>
    )
}

