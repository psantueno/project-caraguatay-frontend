import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const LoginPage = () => {

    return (
        <>
       
        <Container className="mt-2 mb-2 text-center">
            
            <h6 className="mt-4 mb-3 form-title">Acceso exclusivo para administradores/as del sitio</h6>
            <Form>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                        type="email"
                        placeholder="Ingrese su dirección de email." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="Ingrese su contraseña" />
                </Form.Group>
                <Button type="submit">
                    Ingresar
                </Button>
            </Form>
            <div className="p-2 text-center">
                <Link to="/restablecer_contrasena" className="mt-4 mb-3 form-title form-link">Olvidé mi contraseña.</Link>
            </div>
        </Container>
        </>
    );
}