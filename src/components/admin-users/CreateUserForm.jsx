import React, { useRef, useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import "./admin-users.css";
import { useForm } from "../../hooks/useForm";
import { UserValidations } from "./UserValidation";
import { fileUpload } from '../../helpers/fileUpload';
import { Loader } from '../buttons/Loader';

export const CreateUserForm = ({ handleClose, setShowResOk, setShowResBad }) => {

  // Agregar segundo ingreso de contraseña y validación de coincidencia.
  // Falta testear validación de usuario eliminado
  // Falta resolver el pasaje de responseMsg a UsersTable
 

  const inputs = {
    email: useRef(),
    name: useRef(),
    lastName: useRef(),
    password: useRef(),
    role: useRef(),
    avatar: useRef(),
  }

  const avatarDefault = "https://res.cloudinary.com/caraguatay/image/upload/v1691536662/avatar/user-avatar_d4x7se.png"

  const initialForm = {
    email: "",
    name: "",
    lastName: "",
    password: "",
    role: "",
    avatar: avatarDefault,
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
    setResponseMsg,
    handleReset,
    setLoading,
    errors,
    responseMsg,
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


  const showFileNotImage = () => {
    delete errors.avatar;
    setMsgFileNotImage(false)
  }

  /* Funciones específicas de form (handleSubmit) */

  const handleSubmit = async (e) => {
    handleChange(e);
    e.preventDefault();

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);

      try {
        let avatarUrl = form.avatar; // Keep the current avatar URL

        if (files.length > 0) {
          const folder = "avatar";
          avatarUrl = await fileUpload(files[0], folder); // Update avatar URL with new image
        } else {
          const folder = "avatar";
          avatarUrl = await fileUpload(avatarDefault, folder);
        }

        const data = {
          ...form,
          avatar: avatarUrl // Set the new avatar URL
        };

        const req = await fetch('http://localhost:4001/api/users/create', {
          method: "POST",
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        });
        const res = await req.json();
        setResponseMsg(res);
        console.log(responseMsg, "linea124");

        if (res.status === 201) {         
          setShowResOk(true);
          setShowResBad(false);
          setForm(initialForm);
          handleReset();
          handleClose();
        } else {     
          setShowResBad(true);
          console.log("-------------------");
          console.log(res);
          console.log("-------------------");
          handleClose();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowResOk(false);
      alert("Revise los errores del formulario");
    }
  };

  console.log("Completed inputs", form);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Dirección de e-mail:</Form.Label>
          <Form.Control
            value={form.email}
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
            value={form.name}
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
            value={form.lastName}
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
            value={form.password}
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

        <Button type="submit" className="mt-3 buttonPosition">
          Crear
        </Button>

        <Loader />
      </Form>
    </>
  );
};
