import { useEffect, useRef, useState } from 'react';
import { Button, Form, Container, Col, Row, Table, Alert } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import { NewsFormValidations } from './NewsFormValidations';
import { DeleteButton } from '../buttons/DeleteButton';
import { Loader } from '../buttons/Loader';
import { useFetchNewsCategories } from '../../hooks/useFetchNewsCategories';
import dayjs from "dayjs";
import { uploadImages } from './helpers/uploadImages';
import { ShowAlerts } from '../../helpers/ShowAlerts';


const initialForm = {
  date: dayjs().format("YYYY-MM-DD"),
  title: "",
  mainText: "",
  category: "default",
  imagesUrl: "",
  user_id: 1
};


export const CreateNewsForm = () => {

  const [msgFileNotImage, setMsgFileNotImage] = useState(false);

  const inputs = {
    title: useRef(),
    mainText: useRef(),
    date: useRef(),
    category: useRef(),
    files: useRef()
  }

  const { newsCategories } = useFetchNewsCategories(); // Hook personalizado que trae las categorías de noticias.

  const {
    form,
    setForm,
    handleChange,
    handleBlur,
    handleKeyUp,
    handleMouseup,
    handleReset,
    setShowResOk,
    setShowResBad,
    setResponseMsg,
    setRequirementValue,
    setItems,
    setErrors,
    setFilesNews,
    setLoading,
    FormValidations,
    filesNews,
    errors,
    loading,
    showResOk,
    showResBad,
    responseMsg,
  } = useForm(initialForm, NewsFormValidations, inputs)   // hook useForm que maneja el formulario.


  /* Funciones específicas de news form */

  const handleFiles = (e) => {

    const { files } = e.target;

    for (let i = 0; i < files.length; i++) {                // validación de que todos los elementos sean imagenes.
      const fileName = files[i].name.toLowerCase();
      if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.png')) {
        setMsgFileNotImage(true);
        setErrors({
          ...errors,
          files: `El archivo "${fileName}" no es una imagen `
        });
        return;
      }
    }
    delete errors.files;
    setFilesNews(prevState => [...prevState, ...Array.from(files)]);
  };

  const handleClick = () => {
    inputs.files.current.click();
  };

  const handleDelete = (index) => {
    setFilesNews(prevState => prevState.filter((_, i) => i !== index));
  }

  const showFileNotImage = () => {
    delete errors.files;
    setMsgFileNotImage(false)
  }

  const handleSubmit = async (e) => {

    handleChange(e);
    e.preventDefault();
    setErrors(FormValidations(form, e, inputs, errors));

    if (Object.keys(errors).length === 0) {

      setLoading(true);        // activa el loader

      const imagesToString = await uploadImages(filesNews);       // Fx que que sube las imagenes a cloud y devuelve las urls.

      if (imagesToString.errors && imagesToString.errors.length > 0) {   // si hay errores en la carga a cloudinary.
        setLoading(false);
        setShowResBad(true);
        setResponseMsg(imagesToString);
        return;
      }

      const formattedImg = imagesToString.split(', ').map(url => url.trim());

      const data = {                                          // preparando el archivo para enviarlo al back.
        ...form,
        imagesUrl: formattedImg,
        user_id: 2,
      }
      // Algunas ideas: podría sacar el state de loading, de showResok, showresBad e incluirlos en un helper fetch para el envio del form
      try {
        const req = await fetch('http://localhost:4001/api/noticias/create', {
          method: "POST",
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })

        const res = await req.json();
        setResponseMsg(res);

        if (res.status === 201) {
          setLoading(false);
          setShowResOk(true);
          setShowResBad(false);
          setForm(initialForm);
          setItems([])
          setRequirementValue('')
          setFilesNews([]);
          handleReset();
          window.scrollTo({ top: 0, behavior: 'smooth', passive: true });

        } else {
          setLoading(false);
          setShowResBad(true);
          window.scrollTo({ top: 0, behavior: 'smooth', passive: true });
        }
      }
      catch (error) {
        console.log(error)
      }
    } else {
      setShowResOk(false);
      alert("Revise los errores del formulario");
    }
  }

  useEffect(() => {
    // Desplázate hacia arriba cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Desplázate hacia arriba cuando el componente se monta

  }, [filesNews]);


  return (

    <>

      {/*Muestra las RESPUESTAS OK y BAD DEL RESPONSE  */}
      <ShowAlerts showResOk={showResOk} showResBad={showResBad} responseMsg={responseMsg} setShowResOk={setShowResOk} setShowResBad={setShowResBad} />


      <Container className='mt-4'>
        <h4><i className="far fa-newspaper"></i> Crear nueva noticia</h4>
      </Container>


      <Container className='mb-3 mt-3'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='category'>
            <Form.Label className='mt-1 form-field-name'>Categoría</Form.Label>
            <Form.Select
              name="category"
              value={form.category}
              ref={inputs.category}
              onChange={handleChange}
              onMouseUp={handleMouseup}
              onBlur={handleBlur}
              required
            >
              <option disabled value="default">-Seleccione una categoría-</option>
              {
                newsCategories && newsCategories.length > 0
                  ? (newsCategories.map((category, index) => (
                    <option key={index} value={category.id} > {category.category} </option>
                  )))
                  : null
              }
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
              ref={inputs.date}
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
              ref={inputs.title}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
              onBlur={handleBlur}
              required
            />

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
              ref={inputs.mainText}
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
              ref={inputs.files}
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

                  <td name="files" style={{ backgroundColor: "#ffffff", padding: "5px", border: "1px solid", textAlign: "center" }}>
                    {filesNews.length}
                  </td>
                </tr>
              </tbody>
            </Table>

            {/* SIMULADOR DE INPUT FILES */}

            {/* ERRORS MANAGEMENT */}

            {
              filesNews.length > 0 && filesNews.length <= 10
                ? (
                  <p className="images-msg-ok">
                    Archivos cargados correctamente <b><i className="fas fa-check"></i></b>.<br />
                  </p>
                )
                : null
            }

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
              filesNews && filesNews.length > 0
                ? <div className='images-preview'>
                  {
                    filesNews.map((file, index) => {
                      return (
                        <div className='box-individual-preview' key={index}>
                          <img src={URL.createObjectURL(file)} alt={file.name} className="image-individual" />
                          {!loading && <DeleteButton fx={handleDelete} arg={index} size="sm" />}
                        </div>
                      )
                    })
                  }
                </div>
                : null
            }

            {/* MAPEO DE LAS PREVIEW Y HANDLEDELETE */}

            {/* DETALLE DE ERRORS IMAGES */}

            <Alert show={msgFileNotImage} className="alert-file-not-image">
              <p className="images-msg-error">
                {errors.files}<b><i className="fas fa-exclamation-circle"></i></b>.<br />
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

            {
              filesNews.length > 0 && filesNews.length > 10
                ? (
                  <p className="images-msg-error">
                    Errores encontrados <b><i className="fas fa-exclamation-circle"></i></b><br />
                    Seleccione un máximo de <b>10</b> imágenes. <br />
                    <span>
                      Por favor elimine <b> {filesNews.length - 10} </b> de la lista actual.
                    </span>
                  </p>
                )
                : null
            }

            {/* DETALLE DE ERRORS IMAGES  */}

          </Form.Group>

          <Button className='m-2' type="submit" disabled={filesNews.length > 10 || msgFileNotImage || loading} >
            Confirmar
          </Button>
          <Button className='m-2' type="reset" onClick={handleReset} disabled={loading} >
            Borrar
          </Button>

          <Loader
            loader={loading}
            text={"Creando noticia, aguarde por favor..."}
          />

        </Form>
      </Container>

    </>
  )
}