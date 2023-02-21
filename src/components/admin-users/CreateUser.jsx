import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './admin-users.css';


export const CreateUser = ({ show, onClose }) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [avatar, setAvatar] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${email} ${name} ${lastName}`);
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Modal show={show} onHide={onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear un nuevo usuario administrador</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Complete los datos requeridos para crear un nuevo usuario administrador.</p>
                        <p>El usuario tendrá permisos de edición para crear, modificar y eliminar contenido en el sitio.</p>

                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Dirección de e-mail:</Form.Label>
                            <Form.Control
                                value={email}
                                onChange={(e) => setEmail(e.target.email)}
                                type="email"
                                name="email"
                                placeholder="Ingrese el email de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.name)}
                                type="text"
                                placeholder="Ingrese el nombre de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.lastName)}
                                type="text"
                                placeholder="Ingrese el apellido de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.password)}
                                type="password"
                                placeholder="Elija la contraseña original." />
                        </Form.Group>

                        <Form.Select
                            name="rol"
                            value={role}
                            onChange={(e) => setRole(e.target.role)}>
                            <option>Rol</option>
                            <option value="Administrador">Administrador</option>
                        </Form.Select>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control
                                type="file"
                                name="avatar"
                                accept="image/png , image/jpeg, image/jpg" />
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

