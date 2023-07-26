import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { CreateDpForm } from '../forms/CreateDpForm';


export const ModalCreate = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false);

    return (

        <>

            <div className='box-btn-DP'>
                <Button onClick={handleShow} style={{ width: 'auto', textAlign: '' }}>
                    <i className="fas fa-plus"></i> Crear
                </Button>
            </div>


            <Modal show={show} onHide={handleClose} className="mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 className="form-title mt-4">Crear nuevo taller o capacitación</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <CreateDpForm />

                    <Modal.Footer>
                        <Button onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal.Body>
            </Modal>

        </>
    )
}


