import { useContext, useEffect, useRef } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { LoginValidations } from "./LoginValidation";
import { useNavigate } from 'react-router-dom';
import { Loader } from "../buttons/Loader";
import { AuthContext } from "./context/AuthContext";


const initialForm = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  
  const { login } = useContext ( AuthContext )
  const navigate = useNavigate();
  
  const inputs = {
    email: useRef(),
    password: useRef(),
  }


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
    loading,
    showResOk,
    showResBad,
    responseMsg,
    errors,
  } = useForm(initialForm, LoginValidations, inputs);


  const handleSubmit = async (e) => {

    e.preventDefault();
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      setLoading(true);

      try {

        const req = await fetch('http://localhost:4001/api/users/login', {
          method: "POST",
          body: JSON.stringify(form),
          headers: { 'Content-Type': 'application/json' }
        });

        const res = await req.json();
        setResponseMsg(res);
        console.log(res)

        if (res.status === 200) {
          const { user } = res;
          setShowResOk(true);
          setLoading(false);
          login(user, true);    // se envia el user y el estado true para logged.
          setForm(initialForm);
          handleReset();
        } else {
          setShowResBad(true);
          setLoading(false);
        }

      } catch (error) {
        console.log(error);
      }
    } else {
      setShowResOk(false);
      alert("Revise los errores del formulario");
    }
  };

  useEffect(() => {
    if (showResOk) {
      const timer = setTimeout(() => {
        setShowResOk(false);
        navigate('/');
      }, 2000);

      return () => clearTimeout(timer); // Limpia el temporizador.
    }
  }, [showResOk]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth', passive: true });
  }, [])
  

  return (
    <>
      <Container className="mt-2 mb-2 text-center form-login-page ">
        <h6 className="mt-4 mb-3 form-title">
          Acceso exclusivo para administradores/as del sitio
        </h6>

        {/* RESPUESTA OK DEL RESPONSE */}
        <Alert show={showResOk} variant="primary" className="mt-2 p-2">
          {responseMsg && responseMsg.msg ? responseMsg.msg : null}  <div className="spinner-border spinner-border-sm text-right" role="status"></div>
        </Alert>
        {/* RESPUESTA OK DEL RESPONSE */}

        {/* RESPUESTA BAD DEL RESPONSE */}

        <Alert show={showResBad} variant="danger" className="mt-2">
          <Row>
            <Col className="fs-0.5">
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

        <Form onSubmit={handleSubmit} >
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
              autoComplete="email"
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
              autoComplete="current-password"
            />
            {
              errors && errors.password
                ? <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
                : null
            }
          </Form.Group>

          <Button className="btn-primary" type="submit" disabled={loading} >
            Ingresar
          </Button>
        </Form>
        <div className="p-2 text-center">
          <Link to="/restablecer_contrasena" className="mt-4 mb-3 link-italic form-link">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <Loader loader={loading} text={"Iniciando sesión, aguarde por favor..."} />
      </Container>
    </>
  );
};
