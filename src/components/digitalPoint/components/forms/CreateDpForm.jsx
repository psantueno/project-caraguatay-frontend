import { useRef } from 'react';
import { Button, Form, Container, Col, Row, Alert } from 'react-bootstrap';
import { useForm } from '../../../../hooks/useForm';
import { DpValidations } from '../DpValidations';
import { DeleteButton } from '../../../buttons';
import dayjs from "dayjs";


const initialForm = {
    start: dayjs().format("YYYY-MM-DD"),
    title: "",
    description: "",
    category: "default",
    status: "default",
    requirements: [],
    image: undefined
};


export const CreateDpForm = () => {


    const inputs = {
        title: useRef(),
        description: useRef(),
        start: useRef(),
        category: useRef(),
        image: useRef(),
        status: useRef(),
        requirements: useRef()
    }

    const {
        form,
        setForm,
        handleChange,
        handleBlur,
        handleKeyUp,
        handleMouseup,
        handleReset,
        handleSubmit,
        setShowMessage,
        setErrors,
        setItems,
        setRequirementValue,
        requirementValue,
        items,
        errors,
        showMessage,
    } = useForm(initialForm, DpValidations, inputs)


   {/* START SPECIFIC FUNCTIONS OF FORM */}

    const checkTotalCharacters = (array) => {             // ----> Fx encargada de contar los caracteres de un array y que devuelve
                                                         //la cantidad de caracteres restantes para completar el max.
        let totalCharacters = 0;

        for (let i = 0; i < array.length; i++) {
            totalCharacters += array[i].length;
        }

        totalCharacters = 130 - totalCharacters;
        return totalCharacters;
    }

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

                setTimeout(() => {
                    inputs.requirements.current.className = "form-control";
                    delete errors.requirements;
                }, 5000);

                return;
            }

            else {                                                                   // ----> Agrega el nuevo ítem a la lista.
                delete errors.requirements;
                inputs.requirements.current.className = "form-control is-valid";
                addItem(requirementValue);
                setRequirementValue('');
            }
        }
    };


    const handleFile = (e) => {

        const { files } = e.target;

        if (!files[0] && form.image != undefined) {    // ---> cuando hay una imagen cargada, pero el user abre el seleccionador y
                                                        //cancela o cierra el mismo sin elegir archivo.
            setForm(prevState => {
                return {
                    ...prevState,
                    image: undefined
                }
            });
            inputs.image.current.className = "form-control is-invalid";
            errors.image = 'La imagen de portada es requerida.'
            return;

        } else if (!files[0] && form.image === undefined) {  // ---> cuando no hay archivo cargado. Se abre el seleccionador y cancela
                                                            //o cierra el mismo sin elegir archivo.
            setErrors(prevState => {
                return {
                    ...prevState,
                    image: 'La imagen de portada es requerida.'
                }
            });
            inputs.image.current.className = "form-control is-invalid";

        } else {  // ---> cuando existe un archivo que no es imagen.

            const fileName = files[0].name.toLowerCase();

            if (!fileName.endsWith('.jpg') && !fileName.endsWith('.jpeg') && !fileName.endsWith('.png')) {

                setForm(prevState => {
                    return {
                        ...prevState,
                        image: undefined
                    }
                });
                errors.image = `El archivo "${fileName}" no es una imagen.`
                inputs.image.current.className = "form-control is-invalid";

                return;

            } else {   // ---> cuando existe el archivo y es una imagen.

                const newFile = files[0];
                setForm(prevState => {
                    return {
                        ...prevState,
                        image: newFile
                    }
                });
                inputs.image.current.className = "form-control is-valid";
                delete errors.image;
            }
        }
    };

    {/* END FUNCTIONS */}

    return (

        <>

            <Alert show={showMessage} variant="primary" className="mt-2">
                <Row>
                    <Col>
                        <p>La publicación se ha creado correctamente.</p>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button
                            onClick={() => setShowMessage(false)}>
                            Cerrar
                        </Button>
                    </Col>
                </Row>
            </Alert>


            <Container className='mb-3 mt-3'>

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
                            <option value="default">-Seleccione una categoría-</option>
                            <option value="taller" >Taller</option>
                            <option value="capacitacion" >Capacitación</option>
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
                            <option value="open" >Abiertas</option>
                            <option value="closed" >Cerradas</option>
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
                            min={dayjs().format("YYYY-MM-DD")}
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

                        <Form.Control
                            type="file"
                            name="image"
                            ref={inputs.image}
                            onChange={handleFile}
                            onBlur={handleBlur}
                            accept="image/png , image/jpeg, image/jpg"
                            required
                        />

                        {
                            errors && errors.image
                                ? <Form.Control.Feedback type="invalid">
                                    {errors.image}
                                </Form.Control.Feedback>
                                : null
                        }

                    </Form.Group>

                    <Form.Group className="mb-3" controlId='requirements'>
                        <Form.Label className='mt-1 form-field-name'>Ingrese los requisitos</Form.Label>

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
