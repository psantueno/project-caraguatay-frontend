import React, { useContext, useState } from 'react';
import { UserAdminContext } from './UserAdminContext';
import { Form, Button } from 'react-bootstrap';
import './admin-users.css';

export const CreateUserForm = () => {

    const { addUser } = useContext(UserAdminContext);

    const [newUser, setNewUser] = useState({
        email: "", name: "", lastName: "", password: "", role: "",
    });

    const onInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

   const { email, name, lastName, password, role } = newUser;

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(email, name, lastName, password, role);
        
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Label>Dirección de e-mail:</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(e) => onInputChange(e)}
                        type="email"
                        name="email"
                        placeholder="Ingrese el email de la persona." />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                        type="text"
                        placeholder="Ingrese el nombre de la persona." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        name="lastName"
                        value={lastName}
                        onChange={(e) => onInputChange(e)}
                        type="text"
                        placeholder="Ingrese el apellido de la persona." />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="password"
                        value={password}
                        onChange={(e) => onInputChange(e)}
                        type="password"
                        placeholder="Elija la contraseña original." />
                </Form.Group>

                <Form.Select
                    name="role"
                    value={role}
                    onChange={(e) => onInputChange(e)}>
                    <option>Rol</option>
                    <option value="Administrador">Administrador</option>
                </Form.Select>

                {/* <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control
                                type="file"
                                name="avatar"
                                accept="image/png , image/jpeg, image/jpg" 
                                file={avatar}
                                onChange = { (e) => onInputChange(e)}                              
                                />
                        </Form.Group> */}

                <Button type="submit" className="mt-3 buttonPosition" >
                    Crear
                </Button>

            </Form>

        </>
    )
}

