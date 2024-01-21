import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useFetchNewsCategories } from '../../hooks/useFetchNewsCategories';
import { usefetchNewsById } from '../../hooks/useFetchNewsById';
import { Button, Form, Container, Col, Row, Table, Alert } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import { NewsFormValidations } from './NewsFormValidations';
import { DeleteButton } from '../buttons/DeleteButton';
import { Loader } from '../buttons/Loader';
import { uploadImages } from './helpers/uploadImages';
import dayjs from "dayjs";

export const EditNewsForm = () => {

  const { user } = useContext(AuthContext)

  const navigate = useNavigate();

  const { news, loadingFetch, id } = usefetchNewsById();
  const [msgFileNotImage, setMsgFileNotImage] = useState(false);
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [imagesToKeep, setImagesToKeep] = useState([]);


  const initialForm = {
    // date: news ? news.date : dayjs().format('YYYY-MM-DD'),
    title: news ? news.title : '',
    mainText: news ? news.mainText : '',
    category: news ? news.newsCategory_id : 'default',
    imagesUrl: news ? news.urlArray : '',
    user_id: news ? news.user_id : '',
  };


  const inputs = {
    title: useRef(),
    mainText: useRef(),
    date: useRef(),
    category: useRef(),
    files: useRef()
  };

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
  } = useForm(initialForm, NewsFormValidations, inputs);


  const handleSubmit = async (e) => {

    handleChange(e);
    e.preventDefault();
    setErrors(FormValidations(form, e, inputs, errors));

    if (Object.keys(errors).length === 0) {

      setLoading(true);        // activa el loader

      const data = {                                          // preparando el archivo para enviarlo al back.
        ...form,
        user_id: user.id,
      }

      console.log(form)

      if (filesNews.length > 0) {
        const imagesToString = await uploadImages(filesNews);                    // Fx que que sube las imagenes a cloud y devuelve las urls.

        if (imagesToString.errors && imagesToString.errors.length > 0) {         // si hay errores en la carga a cloudinary.
          setLoading(false);
          setShowResBad(true);
          setResponseMsg(imagesToString);
          return;
        }

        const formattedImg = imagesToString.split(', ').map(url => url.trim());
        data.imagesUrl = [...imagesToKeep, ...formattedImg];
      }
      else if (imagesToKeep.length > 0) {
        data.imagesUrl = imagesToKeep;
      }
      else {
        setMsgFileNotImage(true);
        setErrors({
          ...errors,
          files: `Debe seleccionar al menos 1 (una) imagen para la noticia.`
        });
        setLoading(false);
        return;
      }


      console.log(data)
      delete errors.files;

      // Algunas ideas: podría sacar el state de loading, de showResok, showresBad e incluirlos en un helper fetch para el envio del form
      try {
        const req = await fetch(`http://localhost:4001/api/noticias/update/${id}` , {
          method: "PUT",
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        })

        const res = await req.json();
        setResponseMsg(res);

        console.log("res", res)

        if (res.status === 200) {
          setLoading(false);
          setShowResOk(true);
          setShowResBad(false);
          setForm(initialForm);
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


  const handleFiles = (e) => {
    const { files } = e.target;

    if (files.length === 0) return
    const countImages = 10 - (filesNews.length + imagesToKeep.length + files.length);

    if (countImages < 0) {
      // Si se excede el límite de 10 imágenes en total, muestra un mensaje de error.
      setMsgFileNotImage(true);
      setErrors({
        ...errors,
        files: `Excedió el límite de 10 imágenes en total`,
      });
      return;
    }


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

  const handleDelete = (index) => {                                    // Maneja la eliminacion de la vista previa de nuevas
    setFilesNews(prevState => prevState.filter((_, i) => i !== index));    // imagenes seleccionadas.
  }

  const handleDeleteImageBd = (url) => {                     // Maneja la eliminacion de las imagenes que se encuentran en la BD.
    setImagesToDelete([...imagesToDelete, url]);
    setImagesToKeep((prevState) => prevState.filter((image) => image !== url));
  };

  const showFileNotImage = () => {
    delete errors.files;
    setMsgFileNotImage(false)
  }


  useEffect(() => {
    if (news && !loadingFetch) {

      setForm({
        date: news.date,
        title: news.title,
        mainText: news.mainText,
        category: news.newsCategory_id,
        user_id: news.user_id,
      });

      setImagesToKeep(news.urlArray);
      setLoading(false);
    }
  }, [news, loadingFetch]);

  useEffect(() => {
    // Desplaza hacia arriba cuando el componente se monta
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
  }, [filesNews]);



  return (

    <>
     {/*Muestra las RESPUESTAS OK y BAD DEL RESPONSE  */}
     <ShowAlerts showResOk={showResOk} showResBad={showResBad} responseMsg={responseMsg} setShowResOk={setShowResOk} setShowResBad={setShowResBad} />

      <Container className='mt-4'>
        <h4><i className="fas fa-edit"></i> Editar noticia</h4>
      </Container>

      <Loader
        loader={loadingFetch}
        text={"Cargando noticia, aguarde por favor..."}
      />

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
              disabled
              name="originalDate"
              type="date"
              // min={dayjs().format("YYYY-MM-DD")}
              value={news ? news.date : dayjs().format('YYYY-MM-DD')}
              ref={inputs.date}
              // onChange={handleChange}
              // onKeyUp={handleKeyUp}
              // onBlur={handleBlur}
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
              filesNews && filesNews.length > 0 && (
                <div>
                  <h6>Imagenes que vas a agregar:</h6>
                  <div className='images-preview'>
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
                </div>
              )
            }

            {/* MAPEO DE LAS PREVIEW Y HANDLEDELETE */}

            {/* PREVIEW DE LAS URLS QUE ESTAN EN BD */}
            {
              imagesToKeep.length > 0 && (
                <div>
                  <h6>Imagenes actuales de la noticia:</h6>
                  <div className='images-preview'>
                    {imagesToKeep.map((url, index) => (
                      <div className='box-individual-preview' key={index}>
                        <img src={url} alt={`Imagen ${index + 1}`} className="image-individual" />
                        <DeleteButton fx={handleDeleteImageBd} arg={url} size="sm" />
                      </div>
                    ))}
                  </div>
                </div>
              )
            }
            {/* PREVIEW DE LAS URLS QUE ESTAN EN BD */}

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
            text={"Actualizando noticia, aguarde por favor..."}
          />

        </Form>
      </Container>

    </>

  )

};