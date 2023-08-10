import React, { useContext, useRef, useState } from "react";
import { UserAdminContext } from "./UserAdminContext";
import { Form, Button, Row, Col } from "react-bootstrap";
import "./admin-users.css";
import { useForm } from "../../hooks/useForm";
import { UserValidations } from "./UserValidation";


export const CreateUserForm = () => {

     const inputs = {
        email: useRef(),
        name: useRef(),
        lastName: useRef(),
        password: useRef(),
        role: useRef(),
        avatar: useRef(),
    }

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



    const [msgFileNotImage, setMsgFileNotImage] = useState(false);


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
        handleKeyUp,
        handleBlur,
        handleMouseup,
        setForm,
        errors,
    } = useForm(initialForm, UserValidations, inputs);

    
    

    /* Funciones específicas de manejo de avatar */
   const fileDefault = "https://res.cloudinary.com/caraguatay/image/upload/v1691539178/avatar/user-profile_llmze1.png"
    const handleFiles = ({ target }) => {
        if (target.files.length < 1) {
            setForm((prevState) => ({
                ...prevState,
                avatar: fileDefault,
            }));
        };
        const file = target.files[0];
        const fileName = file.name.toLowerCase();
       // console.log("handleFiles antes", errors.avatar, errorAvatar.error);
        
    //    onValidateAvatar({ target });
    //    // console.log("handleFiles despues", errors.avatar, errorAvatar.error);
    //     if (errorAvatar.error) return;
    //     if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.png')) {
    //         setMsgFileNotImage(true);
    //         setErrors(prevErrors => ({
    //             ...prevErrors,
    //             avatar: [...(prevErrors.avatar || []), `El archivo "${fileName}" no es una imagen`]
    //         }));
    //         return;
    //     }
    //     setForm((prevState) => ({
    //         ...prevState,
    //         avatar: file,
    //     }));
        // Si se selecciona un archivo válido, se borran los errores previos
        // delete errors.avatar;
        // setMsgFileNotImage(false);
    };

    // const showFileNotImage = () => {
    //     delete errors.avatar;
    //     setMsgFileNotImage(false);
    // };

    // const validateErrors = () => {
    //     const valores = Object.values(formErrors);
    //     for (let i = 0; i < valores.length; i++) {
    //         if (valores === false) return false;
    //     }
    //     return true;
    // };

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
                avatar: fileDefault,
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
                        ref={inputs.email}                 
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                        onBlur={handleBlur}
                        type="email"
                        name="email"
                        placeholder="Ingrese el email de la persona."
                    />
                     {
                        errors && errors.email
                            ? <Form.Control.Feedback type="invalid">
                            {errors.email}
                            </Form.Control.Feedback>
                            : null
                        }
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        name="name"
                        value={name}
                        ref={inputs.name}                 
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Ingrese el nombre de la persona."
                    />
                    
                    {
                        errors && errors.name
                            ? <Form.Control.Feedback type="invalid">
                            {errors.name}
                            </Form.Control.Feedback>
                            : null
                        }
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        name="lastName"
                        value={lastName}
                        ref={inputs.lastName}                 
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="Ingrese el apellido de la persona."
                    />
                    {
                        errors && errors.lastName
                            ? <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                            </Form.Control.Feedback>
                            : null
                        }
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        name="password"
                        value={password}
                        ref={inputs.password}                 
                        onChange={handleChange}
                        onKeyUp={handleKeyUp}
                        onBlur={handleBlur}
                        type="password"
                        placeholder="Elija la contraseña original."
                    />
                     {
                        errors && errors.password
                            ? <Form.Control.Feedback type="invalid">
                            {errors.password}
                            </Form.Control.Feedback>
                            : null
                        }
                </Form.Group>

                <Form.Group controlId='role'>
                    <Form.Label className='mt-1 form-field-name'>Rol</Form.Label>
                    <Form.Select
                    name="role"
                    value={form.role}
                    ref={inputs.role}
                    onChange={handleChange}
                    onMouseUp={handleMouseup}
                    onBlur={handleBlur}
                    required
                    >
                    <option value="default">- Seleccione el rol -</option>
                    <option value={1} >Administrador</option>
        
                    </Form.Select>

                    {
                    errors && errors.role
                        ? <Form.Control.Feedback type="invalid">
                        {errors.role}
                        </Form.Control.Feedback>
                        : null
                    }

            </Form.Group>

                <Form.Group controlId="formFile" className="mb-3 mt-3">
                    <Form.Label>Seleccione una foto de perfil (opcional)</Form.Label>
                    <Form.Control
                        type="file"
                        name="avatar"
                        ref={inputs.files}
                        onChange={handleFiles}
                        accept="image/png , image/jpeg, image/jpg"
                    />
                   
                    {/* {errorAvatar.error && <Form.Label> {errorAvatar.msg} </Form.Label>} */}

                    <Row>
                        {/* Pre visualización mostrar la imagen seleccionada */}
                        <p className="mt-2">Imagen seleccionada</p>
                        <Col sm={4}>
                            {avatar ? (
                                <img
                                    src={fileDefault}
                                    alt="Avatar"
                                    className="uploaded-avatar"
                                />
                            ) : (
                                <img
                                    src={fileDefault}
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
