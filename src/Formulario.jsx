import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from './useForm';

const initialForm = {
  category: "",
  eventDate: "",
  title: "",
  mainText: "",
  images: ""
};

const validationsForm = (form) => {
  let errors = {};
//CAMBIAR IF POR SWITCH CASE (VER CHEC)
  if(!form.category.trim() || form.category === "Seleccione la categoría") {
    errors.category = "Seleccione una categoría"
  }
  if(!form.eventDate || form.eventDate === "dd/mm/aaaa") {
    errors.eventDate = "Seleccione la fecha del evento"
  }

  if(!form.title) {
    errors.title = "Escriba el título de la publicación"
  }

  if(!form.mainText) {
    errors.mainText = "Escriba el texto de la publicación"
  }

  return errors
};

let styles = {
  fontWeight: "bold",
  color: '#dc3545'
}

const Formulario = () => {
  const { 
    form, 
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleCancel
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <h4>Crear noticia</h4>
      <Form >
    
        <Form.Group controlId='category'>
          <Form.Label>Categoría</Form.Label>
          <Form.Select 
            name="category"
            placeholder="Seleccione la categoria"
            value = {form.category}
            onChange={handleChange}
            onBlur={handleBlur}
            required
           >
            <option>Seleccione la categoría</option>
            <option >Deportes</option>
            <option >Comunicados</option>
            <option >Cultura y turismo</option>
            <option >Punto digital</option>
          </Form.Select> 
          {errors.category && <p  style={styles}>{errors.category}</p>}
          <Form.Control.Feedback type='invalid'>
             {errors.category}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="eventDate">
          <Form.Label>Fecha</Form.Label>
          <Form.Control 
            name="eventDate"
            type="date"
            placeholder='Seleccione la fecha'
            value = {form.eventDate}
            onChange={handleChange}
            onBlur={handleBlur}
           />
           {errors.eventDate && <p style={styles}>{errors.eventDate}</p>}
          <Form.Control.Feedback type='invalid'>
             {errors.eventDate}
          </Form.Control.Feedback>
        </Form.Group>        

        <Form.Group className="mb-3" controlId='title'>
          <Form.Label>Título</Form.Label>
          <Form.Control as="textarea" rows={1} size="lg" 
          name="title"
          placeholder="Escriba el título de la publicación"
          value = {form.title}
          onChange={handleChange}
          onBlur={handleBlur}
          required/>
          {errors.title && <p  style={styles}>{errors.title}</p>}
          <Form.Control.Feedback type='invalid'>
             {errors.title}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3"  controlId='mainText'>
          <Form.Label>Texto completo</Form.Label>
          <Form.Control as="textarea" rows={6} cols={50} size="lg"
          name="mainText"
          placeholder="Escriba el texto de la publicación"
          value = {form.mainText}
          onChange={handleChange}
          onBlur={handleBlur}
          required 
          />
          {errors.mainText && <p  style={styles}>{errors.mainText}</p>}
          <Form.Control.Feedback type='invalid'>
             {errors.mainText}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="images" className="mb-3">
          <Form.Label>Seleccione las imágenes asociadas</Form.Label>
          <Form.Control type="file" multiple 
          name="images"
          value = {form.images}
          onChange={handleChange}
          onBlur={handleBlur}
          />
           {errors.images && <p  style={styles}>{errors.images}</p>}
          <Form.Control.Feedback type='invalid'>
             {errors.images}
          </Form.Control.Feedback>
        </Form.Group>


        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Confirmar
        </Button>
        <Button variant="primary" type="submit" onClick={handleCancel}>
          Cancelar
        </Button>
      </Form>
    </>
  )
}

export default Formulario;

