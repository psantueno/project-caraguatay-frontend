import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const EditUser = ({ show, onClose, userData }) => {


    return (
        <>
            <Form >
                <Modal show={show} onHide={onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <h4 className="form-title mt-4"> Modificar usuario administrador</h4>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Dirección de e-mail:</Form.Label>
                            <Form.Control
                                value={userData.email}
                                type="email"
                                name="email"
                                placeholder="Ingrese el email de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="name"
                                value={userData.name}
                                type="text"
                                placeholder="Ingrese el nombre de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                value={userData.lastName}
                                name="lastName"
                                type="text"
                                placeholder="Ingrese el apellido de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                            
                                name="password"
                                type="password"
                                placeholder="Elija la contraseña original." />
                        </Form.Group>

                        <Form.Select
                            name="role"
                            value={userData.role}
                          >
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

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={onClose}>
                            Volver al listado
                        </Button>
                        <Button  >
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Form>
        </>
    )
}

export default EditUser
