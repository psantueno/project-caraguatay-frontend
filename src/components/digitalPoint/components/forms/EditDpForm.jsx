import { Button, Form, Container, Col, Row, Alert, Modal } from 'react-bootstrap';
import { DPAdminContext } from '../../context/DPAdminContext';
import { DpValidations } from '../DpValidations';
import { useForm } from '../../../../hooks/useForm';
import { useContext, useEffect, useRef, useState } from 'react';
import { useFetchDpCategories } from '../../../../hooks/useFetchDpCategories';
import { fileUpload } from '../../../../helpers/fileUpload';
import { DeleteButton } from '../../../buttons';


export const EditDpForm = ({ eventsDp, handleClose }) => {

    const [editedRequirements, setEditedRequirements] = useState([]);
    const [msgFileNotImage, setMsgFileNotImage] = useState(false);
    const { dPCategories } = useFetchDpCategories();
    const [requirementsToSend, setRequirementsToSend] = useState('');  // Cambio de nombre del estado
    const [activeErrorInEditedReq, setActiveErrorInEditedReq] = useState(false);
    


    const initialForm = {
        id: eventsDp ? eventsDp.id : '',
        // category: eventsDp ? eventsDp.category : '',
        title: eventsDp ? eventsDp.title : '',
        description: eventsDp ? eventsDp.description : '',
        start: eventsDp ? eventsDp.start : '',
        status: eventsDp ? eventsDp.status : '',
        image: eventsDp ? eventsDp.image : '',
        requirements: '',
        dpCategory_id: eventsDp ? eventsDp.dpCategory_id : ''
    };

    const inputs = {
        title: useRef(),
        description: useRef(),
        category: useRef(),
        image: useRef(),
        status: useRef(),
        requirements: useRef()
    }

    const {
        showResOk,
        setResponseMsg,
        responseMsg,
        setShowResOk,
        setShowResBad,
    } = useContext(DPAdminContext);

    const {
        form,
        handleChange,
        handleKeyUp,
        handleBlur,
        handleMouseup,
        items,
        setItems,
        setForm,
        setErrors,
        setRequirementValue,
        requirementValue,
        setFiles,
        files,
        handleReset,
        setLoading,
        errors,
        formErrors,
    } = useForm(initialForm, DpValidations, inputs);


    const showFileNotImage = () => {
        delete errors.avatar;
        setMsgFileNotImage(false)
    }


    const handleFile = (e) => {
        const imageDp = e.target.files[0];
        const fileName = imageDp.name.toLowerCase();

        if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.png')) {
            setMsgFileNotImage(true);
            setErrors({
                ...errors,
                image: `El archivo "${fileName}" no es una imagen`
            });
            return;
        }

        delete errors.avatar;

        setFiles([imageDp]);
        console.log(imageDp);
    };


    const handleRequirementChange = (event, index) => {
        const updatedRequirements = [...editedRequirements];
        updatedRequirements[index] = event.target.value;
        
        // Validar que no esté vacío y tenga al menos 3 caracteres
        if (updatedRequirements[index].trim().length === 0) {
            setActiveErrorInEditedReq(true);
        } else {
            setActiveErrorInEditedReq(false);
        }
        
        setEditedRequirements(updatedRequirements);
    
        // Actualizar form.requirements
        // const updatedForm = { ...form, requirements: editedRequirements.join(';') };
        // setForm(updatedForm);
    };
    


    // Función para eliminar un requisito existente || NO FUNCIONA 26NOV23 ||
    // const deleteItem = (index) => {
    //     const updatedRequirements = [...editedRequirements];
    //     updatedRequirements.splice(index, 1);
    //     setEditedRequirements(updatedRequirements);

    //     if (checkTotalCharacters(updatedRequirements) < 0) return;

    //     delete errors.requirements;
    //     //  inputs.requirements.current.className = "form-control is-valid";
    // };

    const addItem = (value) => {                          // ----> Fx agregar ítem a la lista.

        setItems([...items, value]);
        setForm(prevState => {
            return {
                ...prevState,
                requirements: [...items, value]
            }
        });
    };

    const deleteItem = (index) => {

        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
        setForm(prevState => {
            return {
                ...prevState,
                requirements: newItems
            }
        });

        if (form.requirements && (checkTotalCharacters(form.requirements) < 0)) return;

        delete errors.requirements;
        inputs.requirements.current.className = "form-control is-valid";

    };

    const handleKeyDown = (e) => {

        if (e.key === 'Enter') {
            e.preventDefault();

            if (requirementValue.trim().length < 3) return;  // Controla que el item a ingresar tenga al menos 3 caracteres.

            if (form.requirements && !(requirementValue.trim().length <= checkTotalCharacters(form.requirements))) { // Control para saber si el ítem a ingresar no supera el max permitido(130).

                setErrors(prevState => {
                    return {
                        ...prevState,
                        requirements: 'Máximo permitido: 130 caracteres. Edite el ítem actual o elimine alguno de los ingresados.'
                    }
                });

                inputs.requirements.current.className = "form-control is-invalid";

                return;
            }

            else {                                           
                delete errors.requirements;
                inputs.requirements.current.className = "form-control is-valid";
                addItem(requirementValue);
                setRequirementValue('');
            }
        }
    };


    const checkTotalCharacters = (array) => {         // ----> Fx encargada de contar los caracteres de un array y que devuelve
        //la cantidad de caracteres restantes para completar el max.
        let totalCharacters = 0;

        if (array) {
            for (let i = 0; i < array.length; i++) {
                totalCharacters += array[i].length;
            }
        }

        totalCharacters = 130 - totalCharacters;
        return totalCharacters;
    }

    /*
    QUEda funcionando la edicion y el agregado de nuevos items. Falta ver eliminar los items
    */
    const handleSubmit = async (e) => {
        handleChange(e);
        e.preventDefault();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            setLoading(true); // activa el loader

            try {
                let imageDpUrl = form.image; // Mantén la URL de la imagen actual

                if (files.length > 0) {
                    const folder = "avatar";
                    imageDpUrl = await fileUpload(files[0], folder); // Actualiza la URL de la imagen con la nueva imagen
                }

                const requerimentsToJoin = [...editedRequirements, ...form.requirements];
                const requerimentsToUpdate = requerimentsToJoin.join(';');

                const data = {
                    ...form,
                    image: imageDpUrl, // Establece la nueva URL de la imagen
                    requirements: requerimentsToUpdate, // Cambio de nombre del estado
                };

                console.log(data);

                const req = await fetch("http://localhost:4001/api/punto-digital/update", {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
                });

                const res = await req.json();
                setResponseMsg(res);

                console.log("res", res);

                if (res.status === 200) {
                    setLoading(false);
                    setShowResOk(true);
                    setShowResBad(false);
                    setForm(initialForm);
                    //setFiles
                    handleReset();
                    handleClose();
                    window.scrollTo({ top: 0, behavior: 'smooth', passive: true });
                } else {
                    setLoading(false);
                    setShowResBad(true);
                    handleClose();
                    window.scrollTo({ top: 0, behavior: 'smooth', passive: true });
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
        if (eventsDp.requirements) {
            setEditedRequirements(eventsDp.requirements.split(';'));
        }
    }, [eventsDp.requirements]);

    return (

        <>

            <Container className='mb-3 mt-3'>

                <h3>Editar Evento</h3>

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId='category'>
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
                            <option disabled value="default"> -Seleccione una categoría-</option>
                            {
                                dPCategories && dPCategories.length > 0
                                    ?
                                    (dPCategories.map((cat, index) => (
                                        <option key={index} value={cat.id}>{cat.category}</option>
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

                    <Form.Group className="mb-3" controlId='status'>
                        <Form.Label className='mt-1 form-field-name'>Estado de las inscripciones</Form.Label>
                        <Form.Select
                            name="status"
                            value={form.status}
                            ref={inputs.status}
                            onChange={handleChange}
                            onMouseUp={handleMouseup}
                            onBlur={handleBlur}
                            required
                        >
                            <option value="default">-Seleccione el estado-</option>
                            <option value={1} >Abiertas</option>
                            <option value={0} >Cerradas</option>
                        </Form.Select>

                        {
                            errors && errors.status
                                ? <Form.Control.Feedback type="invalid">
                                    {errors.status}
                                </Form.Control.Feedback>
                                : null
                        }

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="start">
                        <Form.Label className='mt-2 form-field-name'>Fecha de inicio</Form.Label>
                        <Form.Control
                            name="start"
                            type="date"
                            // min={dayjs().format("YYYY-MM-DD")}
                            value={form.start}
                            ref={inputs.start}
                            onChange={handleChange}
                            onKeyUp={handleKeyUp}
                            onBlur={handleBlur}
                            required
                        />

                        {
                            errors && errors.start
                                ? <Form.Control.Feedback type="invalid">
                                    {errors.start}
                                </Form.Control.Feedback>
                                : null
                        }

                    </Form.Group>

                    <Form.Group className="mb-3" controlId='title'>
                        <Form.Label className='mt-1 form-field-name'>Título</Form.Label>
                        <Form.Control as="textarea" rows={1} size="md"
                            name="title"
                            placeholder="Escriba el título"
                            value={form.title}
                            ref={inputs.title}
                            onChange={handleChange}
                            onKeyUp={handleKeyUp}
                            onBlur={handleBlur}
                            minLength={3}
                            maxLength={50}
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

                    <Form.Group className="mb-3" controlId='description'>
                        <Form.Label className='mt-1 form-field-name'>Descripción</Form.Label>
                        <Form.Control as="textarea" rows={6} cols={50} size="md"
                            name="description"
                            placeholder="Escriba el texto de la publicación"
                            value={form.description}
                            ref={inputs.description}
                            onChange={handleChange}
                            onKeyUp={handleKeyUp}
                            onBlur={handleBlur}
                            minLength={10}
                            maxLength={130}
                            required
                        />

                        {
                            errors && errors.description
                                ? <Form.Control.Feedback type="invalid">
                                    {errors.description}
                                </Form.Control.Feedback>
                                : null
                        }

                    </Form.Group>

                    <Form.Group controlId="image" className="mb-3">
                        <Form.Label className='mt-1 form-field-name'>Seleccione la portada</Form.Label>
                        <Row>
                            <p className="mt-2">Imagen de perfil actual</p>
                            <Col sm={4}>

                                {
                                    <img
                                        className='preview-image-dp'
                                        src={eventsDp.image}
                                    />
                                }

                            </Col>
                        </Row>

                        <Form.Control
                            type="file"
                            name="image"
                            ref={inputs.image}
                            onChange={handleFile}
                            onBlur={handleBlur}
                            accept="image/png , image/jpeg, image/jpg"

                        />
                        <Row>
                            <p className={files && files.length > 0 ? "mt-2" : "hidden"}  >Imagen seleccionada</p>
                            <Col sm={4}>

                                {/* AVATAR PREVIEW  ESTA PARTE ANDA 2NOV23*/}
                                {
                                    files && files.length > 0
                                    && <div className='images-preview'>
                                        {
                                            files.map((file, index) => {
                                                return (
                                                    <div className='box-individual-preview' key={index}>
                                                        <img src={URL.createObjectURL(file)} alt={file.name} className={files && files.length > 0 ? 'preview-image-dp' : "hidden"} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>

                                }

                                {/* AVATAR PREVIEW  */}
                            </Col>
                        </Row>

                        {/* DETALLE DE ERRORS IMAGES ESTA PARTE ANDA 2NOV23*/}

                        <Alert show={msgFileNotImage} className="alert-file-not-image">
                            <p className="images-msg-error">
                                {errors.avatar}<b><i className="fas fa-exclamation-circle"></i></b><br />
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

                        {/* DETALLE DE ERRORS IMAGES  */}

                        {/* {
                            errors && errors.image
                                ? <Form.Control.Feedback type="invalid">
                                    {errors.image}
                                </Form.Control.Feedback>
                                : null
                        } */}




                    </Form.Group>
                    <Form.Group className="mb-3" controlId='requirements'>
                        <div className="requirements-card">
                            <p className="subtitles-card"><b>Requisitos cargados:</b></p>

                            { activeErrorInEditedReq && <p  style={{ color: "#dc3545"}}>Los requisitos no pueden estar vacíos. Si desea eliminarlo, utilice el botón <i className="fas fa-trash-alt"></i> (borrar).</p> }

                            {editedRequirements && editedRequirements.map((requirement, index) => (
                                <div key={index} className="requirements-input">
                                    <Form.Control
                                        type="text"
                                        name={`requirements[${index}]`}
                                        // minLength={3}
                                        value={requirement}
                                        onChange={(e) => handleRequirementChange(e, index)}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <DeleteButton fx={deleteItem} arg={index} size="sm" />
                                </div>
                            ))}


                            <Form.Label className='mt-1 form-field-name'><i className="fas fa-plus-square"></i> Agregar requisitos</Form.Label>

                            <Form.Control
                            type="text"
                            name="requirements"
                            minLength={3}
                            placeholder="Ingrese los requisitos"
                            value={requirementValue}
                            ref={inputs.requirements}
                            // onChange={handleChange}
                            onChange={(event) => setRequirementValue(event.target.value)}
                            // onKeyUp={handleKeyUp}
                            // onBlur={handleBlur}
                            onKeyDown={handleKeyDown}
                        />

                            {
                                errors && errors.requirements
                                    ? <Form.Control.Feedback type="invalid">
                                        {errors.requirements}
                                    </Form.Control.Feedback>
                                    : null
                            }

                            {/* HELPER TEXT DE REQUIREMENTS */}
                            {
                                <div className='container-helpers'>
                                    <p className='characters-counter'>({130 - checkTotalCharacters(form.requirements)}/130)</p>
                                    <p className='helper-form'>Escriba el requisito y presione "ENTER" para insertarlo.</p>
                                    <p className='helper-form'>El requisito debe tener al menos 3 caracteres <i className="fas fa-exclamation-circle"></i>.</p>
                                </div>
                            }
                            {/* HELPER TEXT DE REQUIREMENTS */}

                            {/* PREVIEW REQUIREMENTS */}
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index} className="items-requirements">{item} <DeleteButton fx={deleteItem} arg={index} size="sm" /></li>
                                ))}
                            </ul>
                            {/* PREVIEW REQUIREMENTS */}
                        </div>
                    </Form.Group>

                    <Button className='m-2' type="submit">
                        Confirmar
                    </Button>

                    <Button className='m-2' type="reset" onClick={handleReset}>
                        Borrar
                    </Button>
                </Form>
            </Container>
        </>
    )
}