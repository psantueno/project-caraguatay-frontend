import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const ResetPassword = () => {

    return (
        <>

        <Container className="mt-2 mb-2 text-center">
            <h6 className="mt-4 mb-3 form-title">Cambiar contraseña</h6>
            <Form>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Control
                        type="email"
                        placeholder="Ingrese su dirección de email." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="newPassword">
                    <Form.Control
                        type="password"
                        placeholder="Ingrese su nueva contraseña" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Control
                        type="password"
                        placeholder="Repita su nueva contraseña" />
                </Form.Group>

                <Button type="submit">
                    Guardar
                </Button>
            </Form>
            <div className="p-2 text-center">
                <Link to="/login" className="mt-4 mb-3 form-title form-link">Volver a la página de ingreso.</Link>
            </div>
        </Container>
        </>
    );
}