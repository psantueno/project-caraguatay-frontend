import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { validations } from "../helpers/validations";

const initialForm = {
  email: "",
  password: "",
};
const errors = [false, false];
export const LoginPage = () => {
  const { email, password, handleChange, handleSubmit } = useForm(initialForm);

  const onBlurEmail = ({ target }) => {
    if (validations.validarEmail(target.value)) {
      target.className = "form-control is-valid";
      errors[0] = true;
    } else {
      target.className = "form-control is-invalid";
      errors[0] = false;
    }
  };
  const onBlurPassword = ({ target }) => {
    if (validations.validarTamaño(target.value, 1)) {
      target.className = "form-control is-valid";
      errors[1] = true;
    } else {
      target.className = "form-control is-invalid";
      errors[1] = false;
    }
  };

  const onSubmit = (e) => {
    console.log("paso");
    e.preventDefault();
    if ( errors.filter((error) => { return !error}).length > 0
    ) {
      console.log("hay errores");
      return;
    }
    handleSubmit(e);
  };

  return (
    <>
      <Container className="mt-2 mb-2 text-center">
        <h6 className="mt-4 mb-3 form-title">
          Acceso exclusivo para administradores/as del sitio
        </h6>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={onBlurEmail}
              placeholder="Ingrese su dirección de email."
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              onBlur={onBlurPassword}
              placeholder="Ingrese su contraseña"
            />
          </Form.Group>
          <Button type="submit" onSubmit={onSubmit}>
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
