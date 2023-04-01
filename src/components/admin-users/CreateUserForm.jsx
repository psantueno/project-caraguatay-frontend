import React, { useContext, useState } from "react";
import { UserAdminContext } from "./UserAdminContext";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./admin-users.css";
import AvatarDefault from "../../assets/user-avatar.png";
import { useForm } from "../../hooks/useForm";
import { validations } from "../helpers/validations";

export const CreateUserForm = () => {
    const initialForm = {
        email: "",
        name: "",
        lastName: "",
        password: "",
        role: "",
        avatar: "",
    };

    const formErrors = {
        email: false,
        name: false,
        lastName: false,
        password: false,
        role: false,
        avatar: false,
    };

    const [errorEmail, setErrorEmail] = useState({ error: false, msg: "" });
    const [errorName, setErrorName] = useState({ error: false, msg: "" });
    const [errorLastName, setErrorLastName] = useState({ error: false, msg: "" });
    const [errorPassword, setErrorPassword] = useState({ error: false, msg: "" });
    const [errorRole, setErrorRole] = useState({ error: false, msg: "" });
    const [errorAvatar, setErrorAvatar] = useState({ error: false, msg: "" });

    const [msgFileNotImage, setMsgFileNotImage] = useState(false);
    const [errors, setErrors] = useState(formErrors);

    const { addUser } = useContext(UserAdminContext);

    const {
        email,
        name,
        lastName,
        password,
        role,
        avatar,
        form,
        handleChange,
        setForm,
    } = useForm(initialForm);

    const onEmailChange = ({ target }) => {
        handleChange({ target });
        onValidateEmail({ target });
    };
    const onNameChange = ({ target }) => {
        handleChange({ target });
        onValidateName({ target });
    };
    const onLastnameChange = ({ target }) => {
        handleChange({ target });
        onValidateLastName({ target });
    };
    const onPasswordChange = ({ target }) => {
        console.log(target.value);
        handleChange({ target });
        onValidatePassword({ target });
    };
    const onRolChange = ({ target }) => {
        handleChange({ target });
        onValidateRole({ target });
    };

    // VALIDATIONS FROM LEAN

    const onValidateEmail = ({ target }) => {
        if (validations.validarEmail(target.value)) {
            target.className = "form-control is-valid";
            setErrors({ ...errors, email: true });
            setErrorEmail({ error: false, msg: "" });
        } else {
            target.className = "form-control is-invalid";
            setErrors({ ...errors, email: false });
            setErrorEmail({
                error: true,
                msg: "Ingrese un formato de email válido.",
            });
        }
    };
    const onValidateName = ({ target }) => {
        if (validations.validarTexto(target.value)) {
            target.className = "form-control is-valid";
            setErrors({ ...errors, name: true });
            setErrorName({ error: false, msg: "" });
        } else {
            target.className = "form-control is-invalid";
            setErrors({ ...errors, name: false });
            setErrorName({ error: true, msg: "El nombre solo admite letras." });
        }
    };
    const onValidateLastName = ({ target }) => {
        if (validations.validarTexto(target.value)) {
            target.className = "form-control is-valid";
            setErrors({ ...errors, lastname: true });
            setErrorLastName({ error: false, msg: "" });
        } else {
            target.className = "form-control is-invalid";
            setErrors({ ...errors, lastname: false });
            setErrorLastName({ error: true, msg: "El apellido solo admite letras." });
        }
    };
    const onValidatePassword = ({ target }) => {
        if (validations.validarPassword(target.value)) {
            target.className = "form-control is-valid";
            setErrors({ ...errors, password: true });
            setErrorPassword({ error: false, msg: "" });
        } else {
            target.className = "form-control is-invalid";
            setErrors({ ...errors, password: false });
            setErrorPassword({
                error: true,
                msg: "Debe usar al menos 1 minúscula, una mayúscula, 1 caracter especial. Mínimo 6 caracteres.",
            });
        }
    };
    const onValidateRole = ({ target }) => {
        console.log(target.value);
        if (validations.validarTexto(target.value)) {
            target.className = "form-control is-valid";
            setErrors({ ...errors, role: true });
            setErrorRole({ error: false, msg: "" });
        } else {
            target.className = "form-control is-invalid";
            setErrors({ ...errors, role: false });
            setErrorRole({ error: true, msg: "Seleccione una opción." });
        }
    };
    const onValidateAvatar = ({ target }) => {
        console.log("OnvalidateAvatar Afuera", errors.avatar, errorAvatar.error);
        if (validations.validarTamaño(target.value, 4)) {
            target.className = "form-control is-valid";
            setErrors({ ...errors, avatar: true });
            console.log("OnvalidateAvatar adentro", errors.avatar, errorAvatar.error);
            setErrorAvatar({ error: false, msg: "" });
        } else {
            target.className = "form-control is-invalid";
            setErrors({ ...errors, avatar: false });
            console.log("OnvalidateAvatar else", errors.avatar, errorAvatar.error);
            setErrorAvatar({
                error: true,
                msg: "Error en la imagen (ver la forma de especificar esto.).",
            });
        }
    };

    /* Funciones específicas de manejo de avatar */
    const handleFiles = ({ target }) => {
        if (target.files.length < 1) return;
        const file = target.files[0];
        // const fileName = file.name.toLowerCase();
        console.log("handleFiles antes", errors.avatar, errorAvatar.error);
        onValidateAvatar({ target });
        console.log("handleFiles despues", errors.avatar, errorAvatar.error);
        if (errorAvatar.error) return;
        // if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.png')) {
        //     setMsgFileNotImage(true);
        //     setErrors(prevErrors => ({
        //         ...prevErrors,
        //         avatar: [...(prevErrors.avatar || []), `El archivo "${fileName}" no es una imagen`]
        //     }));
        //     return;
        // }
        setForm((prevState) => ({
            ...prevState,
            avatar: file,
        }));
        // Si se selecciona un archivo válido, se borran los errores previos
        // delete errors.avatar;
        // setMsgFileNotImage(false);
    };

    const showFileNotImage = () => {
        delete errors.avatar;
        setMsgFileNotImage(false);
    };

    const validateErrors = () => {
        const valores = Object.values(formErrors);
        for (let i = 0; i < valores.length; i++) {
            if (valores === false) return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        console.log(errors.avatar);
        e.preventDefault();
        if (!validateErrors()) {
            console.log("Se encontraron errores"); // Agregarle un modal o alert con el mensaje.
            return;
        }
        if (!avatar) {
            setForm((prevState) => ({
                ...prevState,
                avatar: AvatarDefault,
            }));
        }
        addUser(email, name, lastName, password, role, avatar);
    };
    console.log("handleSubmit", email, name, lastName, password, role, avatar);
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Dirección de e-mail:</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={onEmailChange}
                        onBlur={onValidateEmail}
                        type="email"
                        name="email"
                        placeholder="Ingrese el email de la persona."
                    />
                    {errorEmail.error && <Form.Label> {errorEmail.msg} </Form.Label>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="name"
                        value={name}
                        onChange={onNameChange}
                        onBlur={onValidateName}
                        type="text"
                        placeholder="Ingrese el nombre de la persona."
                    />
                    {errorName.error && <Form.Label> {errorName.msg} </Form.Label>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        name="lastName"
                        value={lastName}
                        onChange={onLastnameChange}
                        onBlur={onValidateLastName}
                        type="text"
                        placeholder="Ingrese el apellido de la persona."
                    />
                    {errorLastName.error && (
                        <Form.Label> {errorLastName.msg} </Form.Label>
                    )}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="password"
                        value={password}
                        onChange={onPasswordChange}
                        onBlur={onValidatePassword}
                        type="password"
                        placeholder="Elija la contraseña original."
                    />
                    {errorPassword.error && (
                        <Form.Label> {errorPassword.msg} </Form.Label>
                    )}
                </Form.Group>

                <Form.Select name="role" value={role} onChange={onRolChange}>
                    onBlur={onValidateRole}
                    <option value="role" >
                        Rol
                    </option>
                    <option value="Administrador">Administrador</option>
                    {errorRole.error && <Form.Label> {errorRole.msg} </Form.Label>}
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
                    {errorAvatar.error && <Form.Label> {errorAvatar.msg} </Form.Label>}

                    <Row>
                        {/* Pre visualización mostrar la imagen seleccionada */}
                        <p className="mt-2">Imagen seleccionada</p>
                        <Col sm={4}>
                            {avatar ? (
                                <img
                                    src={URL.createObjectURL(avatar)}
                                    alt="Avatar"
                                    className="uploaded-avatar"
                                />
                            ) : (
                                <img
                                    src={AvatarDefault}
                                    alt="Avatar por default"
                                    className="uploaded-avatar"
                                />
                            )}
                        </Col>
                        {/* 
                <Col sm={8} >
                    <p className="file-type-error">{errors && errors.avatar} </p>
                </Col> 
            */}
                    </Row>
                </Form.Group>

                <Button type="submit" className="mt-3 buttonPosition">
                    Crear
                </Button>
            </Form>
        </>
    );
};
