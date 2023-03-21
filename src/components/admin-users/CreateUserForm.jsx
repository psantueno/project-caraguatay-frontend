import React, { useContext, useState } from 'react';
import { UserAdminContext } from './UserAdminContext';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './admin-users.css';
import AvatarDefault from '../../assets/user-avatar.png';
import { useForm } from '../../hooks/useForm';
import { validations } from '../helpers/validations';

export const CreateUserForm = () => {

    const initialForm = {
        email: '',
        name: '',
        lastName: '',
        password: '',
        role: '',
        avatar: '',
    }

    const formErrors = {
        email: false,
        name: false,
        lastName: false,
        password: false,
        role: false,
        avatar: false,
    }

    const [errorEmail, setErrorEmail ] = useState({ error: false, msg: ""});

    const { addUser } = useContext(UserAdminContext);

    // const [newUser, setNewUser] = useState({
    //     email: "", name: "", lastName: "", password: "", role: "", avatar: ""
    // });

    const [msgFileNotImage, setMsgFileNotImage] = useState(false);
    const [errors, setErrors] = useState(formErrors);

    const onInputChange = (e) => {
        onValidateEmail(e)
        onValidateName(e)
        onValidateLastName(e)
        onValidatePassword(e)
        onValidateRole(e)
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }

   // const { email, name, lastName, password, role, avatar } = newUser;
    const { email, name, lastName, password, role, avatar, handleChange } = useForm(initialForm)

    

    // VALIDATIONS FROM LEAN

    const onValidateEmail = ({ target }) => {
        handleChange({target})
        console.log(email);
        if (validations.validarEmail(target.value)) {
            target.className = 'form-control is-valid'
            setErrors({...formErrors, email: true})
            setErrorEmail({ error: false, msg: ""})
        } else {
            target.className = 'form-control is-invalid';
            setErrors({...formErrors, email: false})
            setErrorEmail({ error: true, msg: "Ingrese un formato de email válido."})
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
    const onValidateAvatar = (target) => {
        handleChange(target)
        if (validations.validarTexto(target.value)) {
            target.className = 'form-control is-valid'
            errors[5] = true
        } else {
            target.className = 'form-control is-invalid';
            errors[5] = false
        }
    }

    /* Funciones específicas de manejo de avatar */
    const handleFiles = ({target}) => {
        const file = target.files[0];
        const fileName = file.name.toLowerCase();
        onValidateAvatar(target)
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

    const validateErrors = () => {
        const valores = Object.values(formErrors);
        for (let i = 0; i < valores.length; i++) {
            if (valores = false) return false
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateErrors()) {
            console.log("Se encontraron errores") // Agregarle un modal o alert con el mensaje.
            return 
        } 
        if (!newUser.avatar) {
            setNewUser(prevState => ({
                ...prevState,
                avatar: AvatarDefault
            }));
        }
        addUser(email, name, lastName, password, role, newUser.avatar);
    }
    console.log(email, name, lastName, password, role, avatar);
    return (
        <>
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" >
                    <Form.Label>Dirección de e-mail:</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={onInputChange}
                        onBlur={onValidateEmail}       
                        type="email"
                        name="email"
                        placeholder="Ingrese el email de la persona." />
                       { errorEmail.error && <Form.Label> {errorEmail.msg} </Form.Label>}
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="name"
                        value={name}
                        onChange={(e) => onInputChange(e)}
                        onBlur={onValidateName}
                        
                        type="text"
                        placeholder="Ingrese el nombre de la persona." />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        name="lastName"
                        value={lastName}
                        onChange={onInputChange}
                        onBlur={onValidateLastName}
                        type="text"
                        placeholder="Ingrese el apellido de la persona." />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="password"
                        value={password}
                        onChange={onInputChange}
                        onBlur={onValidatePassword}
                        type="password"
                        placeholder="Elija la contraseña original." />
                </Form.Group>

                <Form.Select
                    name="role"
                    value={role}
                    onChange={onInputChange}>
                    onBlur={onValidateRole}
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
                        onBlur={onValidateAvatar}
                        multiple={false}
                    />

                    <Row>
                        {/* Pre visualización mostrar la imagen seleccionada */}
                        <p className='mt-2'>Imagen seleccionada</p>
                        <Col sm={4}>
                            {avatar ? (
                                <img src={URL.createObjectURL(avatar)} alt="Avatar" className='uploaded-avatar' />
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