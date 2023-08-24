import { useRef, useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { LoginValidations } from "./LoginValidation";
import { Navigate } from 'react-router-dom';

export const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const inputs = {
    email: useRef(),
    password: useRef(),
  }

  const initialForm = {
    email: "",
    password: "",
  };

  const {
    form,
    handleChange,
    handleKeyUp,
    handleBlur,
    setForm,
    setErrors,
    setShowResOk,
    setShowResBad,
    setResponseMsg,
    handleReset,
    setLoading,
    showResOk,
    showResBad,
    responseMsg,
    errors,
  } = useForm(initialForm, LoginValidations, inputs);

  const handleSubmit = async (e) => {
    console.log("paso");
    e.preventDefault();
    setErrors(errors);
    console.log(errors, "linea 43");
    if (Object.keys(errors).length === 0) {
      setLoading(true);

      try {

        const req = await fetch('http://localhost:4001/api/users/login', {
          method: "POST",
          body: JSON.stringify(form),
          headers: { 'Content-Type': 'application/json' }
        });

        const res = await req.json();
        if (res.status === 201) {
          setForm(initialForm);
          handleReset();
          setLoggedIn(true);
        } else {
          console.log(res, "linea 61");
          setResponseMsg(res); 
          setShowResBad(true);
        }
  
      } catch (error) {
        console.log(error);
      }
    } else {
      setShowResOk(false);
      console.log("-------------------");
      console.log(responseMsg);
      console.log("-------------------");
    }
  };
  if (loggedIn) {
    return <Navigate to="/formulario" />;
  }
  return (
    <>
      <Container className="mt-2 mb-2 text-center">
        <h6 className="mt-4 mb-3 form-title">
          Acceso exclusivo para administradores/as del sitio
        </h6>

        {/* RESPUESTA OK DEL RESPONSE */}
        <Alert show={showResOk} variant="primary" className="mt-2">
          <Row>
            <Col>
              <p> {responseMsg && responseMsg.msg ? responseMsg.msg : null} </p>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                onClick={() => setShowResOk(false)}>
                Cerrar
              </Button>
            </Col>
          </Row>
        </Alert>
        {/* RESPUESTA OK DEL RESPONSE */}

        {/* RESPUESTA BAD DEL RESPONSE */}

        <Alert show={showResBad} variant="danger" className="mt-2">
          <Row>
            <Col>
              <p>{responseMsg && responseMsg.errors
                ? responseMsg.errors.map((field, index) => (
                  <li key={index}>{field.msg}</li>
                ))
                : null
              }</p>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button
                variant='danger'
                onClick={() => setShowResBad(false)}>
                Cerrar
              </Button>
            </Col>
          </Row>
        </Alert>
        {/* RESPUESTA BAD DEL RESPONSE */}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              value={form.email}
              ref={inputs.email}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
              type="email"
              name="email"
              placeholder="Ingrese su dirección email."
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

            <Form.Control
              name="password"
              value={form.password}
              ref={inputs.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              placeholder="Ingrese su contraseña."
            />
            {
              errors && errors.password
                ? <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
                : null
            }
          </Form.Group>

          <Button type="submit" >
            Ingresar
          </Button>
        </Form>
        <div className="p-2 text-center">
          <Link
            to="/restablecer_contrasena"
            className="mt-4 mb-3 form-title form-link"
          >
            Olvidé mi contraseña.
          </Link>
        </div>
      </Container>
    </>
  );
};
