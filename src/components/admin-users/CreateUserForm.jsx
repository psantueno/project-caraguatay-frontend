import React, { useContext, useState } from 'react';
import { UserAdminContext } from './UserAdminContext';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './admin-users.css';
import AvatarDefault from '../../assets/user-avatar.png'

export const CreateUserForm = () => {

    const { addUser } = useContext(UserAdminContext);

    const [newUser, setNewUser] = useState({
        email: "", name: "", lastName: "", password: "", role: "", avatar: null
    });

    const [msgFileNotImage, setMsgFileNotImage] = useState(false);
    const [errors, setErrors] = useState({});

    const onInputChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

    const { email, name, lastName, password, role, avatar } = newUser;

    /* Funciones específicas de manejo de avatar */
   
    const handleFiles = (e) => {
        const file = e.target.files[0];
        const fileName = file.name.toLowerCase();

        if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.png')) {
            setMsgFileNotImage(true);
            setErrors(prevErrors => ({
                ...prevErrors,
                avatar: [...(prevErrors.avatar || []), `El archivo "${fileName}" no es una imagen`]
            }));
            return;
        }

        setNewUser(prevState => ({
            ...prevState,
            avatar: file
        }));

        // Si se selecciona un archivo válido, se borran los errores previos
        delete errors.avatar;
        setMsgFileNotImage(false);
    };

    const showFileNotImage = () => {
        delete errors.avatar;
        setMsgFileNotImage(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newUser.avatar) {
            setNewUser(prevState => ({
                ...prevState,
                avatar: AvatarDefault
            }));
        }
        addUser(email, name, lastName, password, role, newUser.avatar);
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

                <Form.Group controlId="formFile" className="mb-3 mt-3">
                    <Form.Label>Seleccione una foto de perfil (opcional)</Form.Label>
                    <Form.Control
                        type="file"
                        name="avatar"
                        accept="image/png , image/jpeg, image/jpg"
                        file={avatar}
                        onChange={handleFiles}
                        multiple={false}
                    />

                    <Row>
                        {/* Pre visualización mostrar la imagen seleccionada */}
                        <p className='mt-2'>Imagen seleccionada</p>
                        <Col sm={4}>
                            {newUser.avatar ? (
                                <img src={URL.createObjectURL(newUser.avatar)} alt="Avatar" className='uploaded-avatar' />
                            ) : (
                                <img src={AvatarDefault} alt="Avatar por default" className='uploaded-avatar' />
                            )}

                        </Col>

                        <Col sm={8} >
                            {/* Errores */}
                            <p className="file-type-error">{errors && errors.avatar} </p>
                            
                        </Col>

                    </Row>
                </Form.Group>

                <Button type="submit" className="mt-3 buttonPosition" >
                    Crear
                </Button>

            </Form>

        </>
    )
}

