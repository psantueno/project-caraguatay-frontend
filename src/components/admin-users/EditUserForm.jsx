import React, { useContext, useState, useRef } from 'react';
import { UserAdminContext } from './UserAdminContext';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import './admin-users.css';
import { useForm } from '../../hooks/useForm';
import { UserValidations } from "./UserValidation";
import { useFetchUserRoles } from '../../hooks/useFetchUserRoles';

const EditUserForm = ({ user, handleCloseEdit }) => {
    const AvatarDefault = "https://res.cloudinary.com/caraguatay/image/upload/v1691536662/avatar/user-avatar_d4x7se.png";
    const [msgFileNotImage, setMsgFileNotImage] = useState(false);
    const id = user.id;
    const { userRoles } = useFetchUserRoles();
    console.log(userRoles)
    const initialForm = {
        email: user ? user.email : '',
        name: user ? user.name : '',
        lastName: user ? user.lastName : '',
        role: user ? user.role : '',
        avatar: user ? user.avatar : '',
    };

    const inputs = {
        email: useRef(),
        name: useRef(),
        lastName: useRef(),
        role: useRef(),
        avatar: useRef()
    };


    const {
        setResponseMsg,
        responseMsg,
        setShowResOk,
        setShowResBad,
    } = useContext(UserAdminContext);

    const {
        form,
        handleChange,
        handleKeyUp,
        handleBlur,
        handleMouseup,
        setForm,
        setErrors,
        setFiles,
        files,
        handleReset,
        setLoading,
        errors,
        avatarDefault,
        formErrors,
    } = useForm(initialForm, UserValidations, inputs);


    /* Funciones específicas de Create User form: handleAvatar */

    const handleAvatar = (e) => {
        const avatarFile = e.target.files[0];
        const fileName = avatarFile.name.toLowerCase();

        if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.png')) {
            setMsgFileNotImage(true);
            setErrors({
                ...errors,
                avatar: `El archivo "${fileName}" no es una imagen`
            });
            return;
        }

        delete errors.avatar;

        setFiles([avatarFile]);
        console.log(avatarFile);
    };


    const handleSubmit = async (e) => {

        handleChange(e);
        e.preventDefault();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {

            setLoading(true);        // activa el loader

            try {
                const req = await fetch("http://localhost:4001/api/users/update", {
                    method: "PUT",
                    body: JSON.stringify(({
                        id: user.id,
                        newData: {
                            ...form,
                        },
                    }),),
                    headers: { 'Content-Type': 'application/json' }
                })
                console.log(form, "linea 93")

                const res = await req.json();
                setResponseMsg(res);

                console.log("res", res)

                if (res.status === 200) {
                    setLoading(false);
                    setShowResOk(true);
                    setShowResBad(false);
                    setForm(initialForm);
                    //setFiles
                    handleReset();
                    handleCloseEdit();
                    window.scrollTo({ top: 0, behavior: 'smooth', passive: true });

                } else {
                    setLoading(false);
                    setShowResBad(true);
                    handleCloseEdit();
                    window.scrollTo({ top: 0, behavior: 'smooth', passive: true });
                }
            }
            catch (error) {
                console.log(error)
            }
        } else {
            setShowResOk(false);
            alert("Revise los errores del formulario");
        }
    }


    return (
        <>
            <Form onSubmit={handleSubmit} >
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Dirección de e-mail:</Form.Label>
                    <Form.Control
                        value={form.email}
                        ref={inputs.email}
                        type="email"
                        name="email"
                        placeholder="Ingrese el email de la persona."
                        onChange={handleChange}
                        onMouseUp={handleMouseup}
                        onBlur={handleBlur}
                        required
                    />
                    {
                        errors && errors.email
                            ? <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                            : null
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        value={form.name}
                        ref={inputs.name}
                        type="text"
                        name="name"
                        placeholder="Ingrese el nombre de la persona."
                        onChange={handleChange}
                        onMouseUp={handleMouseup}
                        onBlur={handleBlur}
                        required
                    />
                    {
                        errors && errors.name
                            ? <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                            : null
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        value={form.lastName}
                        ref={inputs.lastName}
                        type="text"
                        name="lastName"
                        placeholder="Ingrese el apellido de la persona."
                        onChange={handleChange}
                        onMouseUp={handleMouseup}
                        onBlur={handleBlur}
                        required
                    />
                    {
                        errors && errors.lastName
                            ? <Form.Control.Feedback type="invalid">
                                {errors.lastName}
                            </Form.Control.Feedback>
                            : null
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        defaultValue=""
                        name="password"
                        type="password"
                        placeholder="Elija una nueva contraseña."
                        onChange={handleChange}
                        onMouseUp={handleMouseup}
                        onBlur={handleBlur}
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
                        <option disabled value="default">- Seleccione el rol -</option>
                        {
                            userRoles && userRoles.length > 0
                                ? (userRoles.map((role, index) => (
                                    <option key={index} value={role.id} > {role.role} </option>
                                )))
                                : null
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="avatar" className="mb-3 mt-3">
                    <Form.Label>Seleccione una foto de perfil - opcional</Form.Label>

                    <Form.Control
                        type="file"
                        name="avatar"
                        ref={inputs.avatar}
                        onChange={handleAvatar}
                        onBlur={handleBlur}
                        accept="image/png , image/jpeg, image/jpg"
                    />

                    <Row>
                        <p className="mt-2">Imagen de perfil actual</p>
                        <Col sm={4}>

                            {/* PREVIEW DE LAS URLS QUE ESTAN EN BD */}
                            {
        
                                <div className='images-preview'>
                                    { user.avatar && user.avatar }
                                </div>
                       
                        
                            }
                            {/* PREVIEW DE LAS URLS QUE ESTAN EN BD */}
                        </Col>
                    </Row>

                    <Row>
                        <p className="mt-2">Imagen seleccionada</p>
                        <Col sm={4}>

                            {/* AVATAR PREVIEW  */}
                            {
                                files && files.length > 0
                                    ? <div className='images-preview'>
                                        {
                                            files.map((file, index) => {
                                                return (
                                                    <div className='box-individual-preview' key={index}>
                                                        <img src={URL.createObjectURL(file)} alt={file.name} className="image-individual" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    : <img src={avatarDefault} className="image-individual" />
                            }

                            {/* AVATAR PREVIEW  */}
                        </Col>
                    </Row>

                    {/* DETALLE DE ERRORS IMAGES */}

                    <Alert show={msgFileNotImage} className="alert-file-not-image">
                        <p className="images-msg-error">
                            {errors.avatar}<b><i className="fas fa-exclamation-circle"></i></b><br />
                            Extensiones aceptadas: ".jpeg", ".jpg" y ".png".
                        </p>
                        <Col className="d-flex justify-content-end">
                            <Button
                                className="btn-close-alert"
                                onClick={() => showFileNotImage()}
                            >
                                Cerrar <i className="fas fa-times-circle"></i>
                            </Button>
                        </Col>
                    </Alert>

                    {/* DETALLE DE ERRORS IMAGES  */}

                </Form.Group>


                <Button type="submit" className="mt-3 buttonPosition" >
                    Guardar
                </Button>

            </Form>
        </>
    )
}

export default EditUserForm