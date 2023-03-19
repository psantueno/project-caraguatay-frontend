import React, { useContext, useState } from 'react';
import { UserAdminContext } from './UserAdminContext';
import { Form, Button, Row } from 'react-bootstrap';
import './admin-users.css';

const EditUserForm = ({userToEdit}) => {

    const id = userToEdit.id;

    const [email, setEmail] = useState(userToEdit.email);
    const [name, setName] = useState(userToEdit.name);
    const [lastName, setLastName] = useState(userToEdit.lastName);
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(userToEdit.role);
    const [avatar, setAvatar] = useState("");

    const { updateUser } = useContext(UserAdminContext);

    const updatedUser = { id, email, name, lastName, password, role, avatar };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(id, updatedUser)
    }

    return (
        <>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Dirección de e-mail:</Form.Label>
                    <Form.Control
                        defaultValue={email}
                        type="email"
                        name="email"
                        placeholder="Ingrese el email de la persona." 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="name"
                        defaultValue={name}
                        type="text"
                        placeholder="Ingrese el nombre de la persona."
                        onChange={(e) => setName(e.target.value)}
                             />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        defaultValue={lastName}
                        name="lastName"
                        type="text"
                        placeholder="Ingrese el apellido de la persona." 
                        onChange={(e) => setLastName(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        defaultValue={password}
                        name="password"
                        type="password"
                        placeholder="Elija una nueva."
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Select
                    name="role"
                    defaultValue={role}
                    onChange={(e) => setRole(e.target.value)}
                >
                    <option>Rol</option>
                    <option value="Administrador">Administrador</option>
                </Form.Select>

                <Form.Group controlId="formFile" className="mb-3 mt-3">
                    <Form.Label>Seleccione una foto de perfil (opcional)</Form.Label>

                    <Row className='p-3'>Imagen actual <img src={userToEdit.avatar} alt="" className="avatar" /></Row>

                    <Form.Control
                        type="file"
                        name="avatar"
                        accept="image/png , image/jpeg, image/jpg"
                        file={avatar}
                        defaultValue={avatar}
                        onChange={(e) => setAvatar(e.target.value)}
                    />
                    
                </Form.Group>
                <Button type="submit" className="mt-3 buttonPosition" >
                    Guardar
                </Button>

            </Form>
        </>
    )
}

export default EditUserForm
