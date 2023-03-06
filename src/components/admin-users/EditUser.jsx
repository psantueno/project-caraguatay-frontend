import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import { validations } from '../helpers/validations';

const EditUser = ({ show, onClose, userData }) => {

    const initialForm = {
        email: userData.email,
        name: userData.name,
        lastName: userData.lastName,
        password: '',
        role: userData.role,
        avatar: '',
    }

    const errors = [false,false,false,false,false,false]
    const { email, name, lastName, password, role, avatar, handleChange, handleSubmit } = useForm(initialForm)

    const onValidateEmail = ({ target }) => {
        handleChange({target})
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
        handleChange({target})
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
        if (errors.filter((error)=>{return !error}).length>0){
            console.log("hay errores")
            return
        }
        console.log(`${email} ${name} ${lastName}`);
    }
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
                                value={lastName}
                                onBlur={onValidateLastName}
                                onChange={onValidateLastName}
                                name="lastName"
                                type="text"
                                placeholder="Ingrese el apellido de la persona." />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control                            
                                name="password"
                                type="password"
                                value={password}
                                onBlur={onValidatePassword}
                                onChange={onValidatePassword}
                                placeholder="Elija la contraseña original." />
                        </Form.Group>

                        <Form.Select
                            name="role"
                            value={role}
                            onBlur={onValidateAvatar}
                            onChange={onValidateAvatar}
                          >
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
