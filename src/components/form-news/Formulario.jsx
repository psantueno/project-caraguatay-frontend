import React, { useEffect, useRef } from 'react';
import { Button, Form, Container, Col, Table } from 'react-bootstrap';
import { useForm } from './useForm';
import dayjs from "dayjs";

const initialForm = {
  date: dayjs().format("YYYY-MM-DD"),
  title: "",
  mainText: "",
  files: [],
  category: "default"
};


export const Formulario = () => {

  const inputTitle = useRef();
  const inputMainText = useRef();
  const inputDate = useRef();
  const inputCategory = useRef();
  const inputImages = useRef(null);
  const selectedImages = useRef();

  useEffect(() => {
    inputCategory.current.focus();
  }, [])


  const validationsForm = (form, e) => {

    if (e) {

      if (e.target.name === "category") {
        if (form.category === "default") {
          errors.category = "La categoría es requerida.";
          inputCategory.current.className = "form-control is-invalid";
        } else {
          delete errors.category;
          inputCategory.current.className = "form-control is-valid";
        }
      }

      if (e.target.name === "title") {
        if (!form.title.trim()) {
          errors.title = "El título es requerido.";
          inputTitle.current.className = "form-control is-invalid";
        } else if (form.title.trim().length < 3) {
          errors.title = "El título debe tener al menos 3 caracteres.";
          inputTitle.current.className = "form-control is-invalid";
        } else {
          delete errors.title;
          inputTitle.current.className = "form-control is-valid";
        }
      }

      if (e.target.name === "mainText") {
        if (!form.mainText.trim()) {
          errors.mainText = "El texto de la publicación es requerido.";
          inputMainText.current.className = "form-control is-invalid";
        } else if (form.mainText.trim().length < 100) {
          errors.mainText = "El texto de la publicación debe tener al menos 100 caracteres.";
          inputMainText.current.className = "form-control is-invalid";
        } else {
          delete errors.mainText;
          inputMainText.current.className = "form-control is-valid";
        }
      }

      if (e.target.name === "date") {
        if ((form.date === dayjs().format("YYYY-MM-DD")) || (form.date > dayjs().format("YYYY-MM-DD"))) {
          inputDate.current.className = "form-control is-valid";
        } else {
          inputDate.current.className = "form-control is-invalid";
          errors.date = "Ingrese una fecha válida"
        }
      }
    }
    return errors;
  }

  const {
    form,
    handleChange,
    handleFiles,
    handleBlur,
    handleKeyUp,
    handleMouseup,
    handleDelete,
    handleCancel,
    handleSubmit,
    files,
    errors,
  } = useForm(initialForm, validationsForm)


  const handleClick = () => {
    inputImages.current.click();
  };


  return (
    <>
      <Container className='mt-4'>
        <h4>Crear noticia</h4>
      </Container>

      <Container className='mb-3 mt-3'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='category'>
            <Form.Label className='mt-1 form-field-name'>Categoría</Form.Label>
            <Form.Select
              name="category"
              value={form.category}
              ref={inputCategory}
              onChange={handleChange}
              onMouseUp={handleMouseup}
              onBlur={handleBlur}
              required
            >
              <option value="default" disabled>-Seleccione una categoría-</option>
              <option value="Deportes" >Deportes</option>
              <option value="Comunicados" >Comunicados</option>
              <option value="Cultura y turismo" >Cultura y turismo</option>
              <option value="Punto Digital">Punto digital</option>
            </Form.Select>

            {
              errors && errors.category
                ? <Form.Control.Feedback type="invalid">
                  {errors.category}
                </Form.Control.Feedback>
                : null
            }

          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label className='mt-2 form-field-name'>Fecha</Form.Label>
            <Form.Control
              name="date"
              type="date"
              min={dayjs().format("YYYY-MM-DD")}
              value={form.date}
              ref={inputDate}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
              required
            />

            {
              errors && errors.date
                ? <Form.Control.Feedback type="invalid">
                  {errors.date}
                </Form.Control.Feedback>
                : null
            }

          </Form.Group>

          <Form.Group className="mb-3" controlId='title'>
            <Form.Label className='mt-1 form-field-name'>Título</Form.Label>
            <Form.Control as="textarea" rows={1} size="md"
              name="title"
              placeholder="Escriba el título de la publicación"
              value={form.title}
              ref={inputTitle}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
              required />

            {
              errors && errors.title
                ? <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
                : null
            }

          </Form.Group>

          <Form.Group className="mb-3" controlId='mainText'>
            <Form.Label className='mt-1 form-field-name'>Texto completo</Form.Label>
            <Form.Control as="textarea" rows={6} cols={50} size="md"
              name="mainText"
              placeholder="Escriba el texto de la publicación"
              value={form.mainText}
              ref={inputMainText}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
              required
            />

            {
              errors && errors.mainText
                ? <Form.Control.Feedback type="invalid">
                  {errors.mainText}
                </Form.Control.Feedback>
                : null
            }

          </Form.Group>

          <Form.Group controlId="images" className="mb-3">
            <Form.Label className='mt-1 form-field-name'>Seleccione las imágenes asociadas</Form.Label>

            <Form.Control
              type="file"
              name="images"
              style={{ display: 'none' }}
              multiple
              ref={inputImages}
              onChange={handleFiles}
              onBlur={handleBlur}
              accept="image/png , image/jpeg, image/jpg"
            />

            {/* SIMULADOR DE INPUT FILES */}

            <Table className='table'>
              <tbody>
                <tr className='row-table'>
                  <td style={{ backgroundColor: "#e9ecef", padding: "5px" }} >
                    Imágenes seleccionadas:
                  </td>

                  <td ref={selectedImages} name="files" style={{ backgroundColor: "#ffffff", padding: "5px", border: "1px solid", textAlign: "center" }}>
                    {files.length}
                  </td>
                </tr>
              </tbody>
            </Table>

            {/* SIMULADOR DE INPUT FILES */}

            {/* ERRORS MANAGEMENT */}

            {
              files.length === 0
                ? (
                  <p className="images-msg-error">
                    *Campo obligatorio.
                  </p>
                )
                : null
          }

            {
              files.length > 10
                ? (
                  <p className="images-msg-error">
                    Errores encontrados <b><i className="fas fa-exclamation-circle"></i></b>.<br />
                  </p>
                )
                : null
            }

            {
              files.length > 0 && files.length <= 10
                ? (
                  <p className="images-msg-ok">
                    Archivos cargados correctamente <b><i className="fas fa-check"></i></b>.<br />
                  </p>
                )
                : null}

            {/* ERRORS MANAGEMENT */}

            <Col>
              <div className='container-upload-image'>
                <div onClick={handleClick} className='box-upload'>
                  <img className="icon-camera" src="https://img.icons8.com/sf-regular/48/d2d5d8/null/add-camera.png" />
                </div>
              </div>
            </Col>

            {/* MAPEO DE LAS PREVIEW Y HANDLEDELETE */}

            {
              files && files.length > 0
                ? <div className='images-preview'>
                  {
                    files.map((file, index) => {
                      return (
                        <div className='box-individual-preview' key={file.name}>
                          <img src={URL.createObjectURL(file)} alt={file.name} className="image-individual" />
                          <Button onClick={() => handleDelete(index)} variant="outline-danger" size="sm">
                            <i className="fas fa-trash-alt"></i>
                          </Button>
                        </div>

                      )
                    })
                  }
                </div>
                : null
            }

            {/* MAPEO DE LAS PREVIEW Y HANDLEDELETE */}

            {/* DETALLE DE ERRORS IMAGES */}

            {
              files.length > 0 && files.length > 10
                ? (
                  <p className="images-msg-error">
                    Seleccione un máximo de <b>10</b> imágenes. <br />
                    <span>
                      Por favor elimine <b> {files.length - 10} </b> de la lista actual.
                    </span>
                  </p>
                )
                : null
            }

            {/* DETALLE DE ERRORS IMAGES  */}

          </Form.Group>

          <Button className='m-2' type="submit" variant='primary' disabled={files.length > 10} >
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