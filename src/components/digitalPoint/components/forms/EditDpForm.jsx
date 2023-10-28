import { Button, Form, Container, Col, Row, Alert, Modal } from 'react-bootstrap';


export const EditDpForm = ({ id }) => {


    const handleSubmit ={
        
    }

    return (

        <>

        // {/* 
        //             {/* RESPUESTA OK DEL RESPONSE */}
        {/* 
        //             <Alert show={showResOk} variant="primary" className="mt-2">
        //                 <Row>
        //                     <Col>
        //                         <p>La publicación se ha creado correctamente.</p>
        //                     </Col>
        //                     <Col className="d-flex justify-content-end">
        //                         <Button
        //                             onClick={() => setShowResOk(false)}>
        //                             Cerrar
        //                         </Button>
        //                     </Col>
        //                 </Row>
        //             </Alert> */}
        
        // {/*    RESPUESTA OK DEL RESPONSE */}
        
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
                                    <option value="default"> -Seleccione una categoría-</option>
                                    {
                                        dPCategories && dPCategories.map((cat, index) => (
                                            <option key={index} value={cat.id}>{cat.category}</option>
                                        ))
        
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
