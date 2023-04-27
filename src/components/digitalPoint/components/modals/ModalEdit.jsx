import { Button, Modal } from 'react-bootstrap';
import { useModal } from '../../../../hooks/useModal';
import { EditDpForm } from '../forms/EditDpForm';

export const ModalEdit = ({ show, handleClose, id, dpnew }) => {

    // const { show, handleShow, handleClose } = useModal()


    return (

        <>

            <Modal show={show} onHide={handleClose} className="mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 className="form-title mt-4">Editar  </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <EditDpForm id={ id } />

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
