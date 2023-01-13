import React from 'react';
import { Button, Form } from 'react-bootstrap';


export default function Formulario() {
  return (
    <>
      <h4>Crear noticia</h4>
      <Form>
        <Form.Select aria-label="Seleccione la categoria">
          <option>Seleccione la categoría</option>
          <option value="1">Deportes</option>
          <option value="2">Comunicados</option>
          <option value="3">Cultura y turismo</option>
          <option value="3">Punto digital</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" />
        </Form.Group>        

        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control as="textarea" rows={1} size="lg" />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Texto completo</Form.Label>
          <Form.Control as="textarea" rows={6} size="lg" />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Seleccione las imágenes asociadas</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>


        <Button variant="primary" type="submit">
          Confirmar
        </Button>
        <Button variant="primary" type="submit">
          Cancelar
        </Button>
      </Form>
    </>
  )
}

