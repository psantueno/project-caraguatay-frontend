import React from 'react';
import { Button, Form, Container, Col, Row, Image } from 'react-bootstrap';
import { useForm } from './useForm';

const initialForm = {
  category: "",
  eventDate: "",
  title: "",
  mainText: "",
  images: [],
};

                    // (form, target)
const validationsForm = (form) => {
  let errors = {};
   (!form.category.trim()) && (errors.category = "Seleccione una categoría")
   (!form.eventDate || form.eventDate === "dd/mm/aaaa") && (errors.eventDate = "Seleccione la fecha del evento")
   (!form.title) && (errors.title = "Escriba el título de la publicación")
   (!form.mainText) && (errors.mainText = "Escriba el texto de la publicación")

  return errors
};


const Formulario = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleOnKeyUp,
    handleOnblur,
    handleSubmit,
    handleCancel,
    validated,
    selectedImages,
    onSelectFile,
    deleteHandler,
  } = useForm(initialForm, validationsForm);

  return (
    <>
      <Container className='mt-4'>
        <h4>Crear noticia</h4>
      </Container>

      <Container className='mb-3 mt-3'>
        <Form noValidate validated={validated}>
          <Form.Group controlId='category'>
            <Form.Label className='mt-1 form-field-name'>Categoría</Form.Label>
            <Form.Select
              name="category"
              value={form.category}
              isInvalid={!!errors.category}  // debería leer los errores
              onChange={handleChange}
              onBlur={handleOnblur}
              required
            >
              <option> </option>
              <option >Deportes</option>
              <option >Comunicados</option>
              <option >Cultura y turismo</option>
              <option >Punto digital</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors.category}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="eventDate">
            <Form.Label className='mt-2 form-field-name'>Fecha</Form.Label>
            <Form.Control
              name="eventDate"
              type="date"
              required
              value={form.eventDate}
              onChange={handleChange}
              onKeyUp={handleOnblur}
            />
            <Form.Control.Feedback type="invalid">
              {errors.eventDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId='title'>
            <Form.Label className='mt-1 form-field-name'>Título</Form.Label>
            <Form.Control as="textarea" rows={1} size="lg"
              name="title"
              placeholder="Escriba el título de la publicación"
              value={form.title}
              onChange={handleChange}
              onKeyUp={handleOnKeyUp}
              required />
            <Form.Control.Feedback type="invalid" >
              {errors.title}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId='mainText'>
            <Form.Label className='mt-1 form-field-name'>Texto completo</Form.Label>
            <Form.Control as="textarea" rows={6} cols={50} size="lg"
              name="mainText"
              placeholder="Escriba el texto de la publicación"
              value={form.mainText}
              onChange={handleChange}
              onKeyUp={handleOnKeyUp}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.mainText}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="images" className="mb-3">
            <Form.Label className='mt-1 form-field-name'>Seleccione las imágenes asociadas</Form.Label>
            <Form.Control
              type="file"
              multiple
              name="images"
              value={form.selectedImages}
              onInput={onSelectFile}
              isInvalid={!!errors.images}
              accept="image/png , image/jpeg, image/jpg"
            />
          
            {selectedImages.length > 0 ? <p className="pt-3">Imágenes seleccionadas</p> : null}
            
            {selectedImages.length > 0 &&
              (selectedImages.length > 10 ? (
                <p className="image-error">
                  No se pueden seleccionar más de 10 imágenes. <br />
                  <span>
                    Por favor elimine <b> {selectedImages.length - 10} </b> de la lista{" "}
                  </span>
                </p>
              ) : null)}

            {selectedImages &&
              selectedImages.map((image, index) => {
                return (
                  <Col>
                    <Row key={index} className="form-images-row">
                      <Col>
                        <Image src={image} alt="upload" className="form-image" />
                      </Col>
                      <Col>
                        <Button variant="outline-danger" size="sm" onClick={() => deleteHandler(image)}>
                          <i className="fas fa-trash-alt"></i>
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                );
              })}

           
            <Form.Control.Feedback type="invalid" >
              {errors.images}
            </Form.Control.Feedback>

          </Form.Group>


          <Button className='m-2' type="submit" variant='primary' onClick={handleSubmit}>
            Confirmar
          </Button>
          <Button className='m-2' type="submit" variant='danger' onClick={handleCancel}>
            Cancelar
          </Button>
        </Form>
      </Container>

    </>
  )
}

export default Formulario;

