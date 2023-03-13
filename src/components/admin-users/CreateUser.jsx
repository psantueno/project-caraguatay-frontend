import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import { validations } from '../helpers/validations';
import './admin-users.css';


export const CreateUser = ({ show, onClose }) => {

    const initialForm = {
        email: '',
        name: '',
        lastName: '',
        password: '',
        role: '',
        avatar: '',
    }

    const errors = [false,false,false,false,false,false]
    const { email, name, lastName, password, role, avatar, handleChange, handleSubmit } = useForm(initialForm)

    const onValidateEmail = ({ target }) => {
        handleChange({target})
        console.log(email);
        if (validations.validarEmail(target.value)) {
            target.className = 'form-control is-valid'
            errors[0] = true
        } else {
            target.className = 'form-control is-invalid';
            errors[0] = false
        }
    }
    const onValidateName = ({ target }) => {
        handleChange({target})
        if (validations.validarTexto(target.value)) {
            target.className = 'form-control is-valid'
            errors[1] = true
        } else {
            target.className = 'form-control is-invalid';
            errors[1] = false
        }
    }
    const onValidateLastName = ({ target }) => {
        handleChange({target})
        if (validations.validarTexto(target.value)) {
            target.className = 'form-control is-valid'
            errors[2] = true
        } else {
            target.className = 'form-control is-invalid';
            errors[2] = false
        }
    }
    const onValidatePassword = ({ target }) => {
        handleChange({target})
        if (validations.validarPassword(target.value)) {
            target.className = 'form-control is-valid'
            errors[3] = true
        } else {
            target.className = 'form-control is-invalid';
            errors[3] = false
        }
    }
    const onValidateRole = ({ target }) => {
        handleChange({target})//revisar porque esto no cambia el valor
        console.log(target.value);
        if (validations.validarTexto(target.value)) {
            target.className = 'form-control is-valid'
            errors[4] = true
        } else {
            target.className = 'form-control is-invalid';
            errors[4] = false
        }
    }
    const onValidateAvatar = ({ target }) => {
        handleChange({target})
        if (validations.validarTexto(target.value)) {
            target.className = 'form-control is-valid'
            errors[5] = true
        } else {
            target.className = 'form-control is-invalid';
            errors[5] = false
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("paso");
        if (errors.filter((error)=>{return !error}).length>0){
            console.log("hay errores")
            return
        }
        console.log(`${email} ${name} ${lastName}`);
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
                                onBlur={onValidateEmail}
                                onChange={onValidateEmail}
                                type="email"
                                name="email"
                                placeholder="Ingrese el email de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                name="name"
                                value={name}
                                onBlur={onValidateName}
                                onChange={onValidateName}
                                type="text"
                                placeholder="Ingrese el nombre de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control
                                name="lastName"
                                value={lastName}
                                onBlur={onValidateLastName}
                                onChange={onValidateLastName}
                                type="text"
                                placeholder="Ingrese el apellido de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control
                                name="password"
                                value={password}
                                onBlur={onValidatePassword}
                                onChange={onValidatePassword}
                                type="password"
                                placeholder="Elija la contraseña original." />
                        </Form.Group>

                        <Form.Select
                            name="rol"
                            value={role}
                            onBlur={onValidateRole}
                            onChange={onValidateRole}>
                            <option>Rol</option>
                            <option value="Administrador">Administrador</option>
                        </Form.Select>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control
                                type="file"
                                name="avatar"
                                value={avatar}
                                onBlur={onValidateAvatar}
                                onChange={onValidateAvatar}
                                accept="image/png , image/jpeg, image/jpg" />
                        </Form.Group>


                        <Modal.Footer>
                            <Button onClick={onClose}>
                                Volver al listado
                            </Button>
                            <Button 
                                type="submit"  
                                onSubmit={onSubmit}
                            >
                                Crear
                            </Button>
                        </Modal.Footer>

                    </Modal.Body>
                </Modal>
            </Form>

        </>
    )
}

