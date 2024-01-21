import { AuthContext } from '../../../auth/context/AuthContext';
import { useContext } from 'react';
import { CreateDpForm } from '../forms/CreateDpForm';
import { Button, Modal } from 'react-bootstrap';
import { useModal } from '../../../../hooks/useModal';


export const ModalCreate = () => {

    const { logged } = useContext(AuthContext);
    const { show, handleShow, handleClose } = useModal()

    return (

        <>

            {
                logged &&
                <div className='box-btn-DP'>
                    <Button onClick={handleShow} style={{ width: 'auto', textAlign: '' }}>
                        <i className="fas fa-plus"></i> Crear
                    </Button>
                </div>
            }

            <Modal show={show} onHide={handleClose} className="mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 className="form-title mt-4">Crear nuevo taller o capacitación</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <CreateDpForm handleClose={handleClose} />

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
