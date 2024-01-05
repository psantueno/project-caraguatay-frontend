import { Button, Modal } from 'react-bootstrap';
import { useModal } from '../../../../hooks/useModal';
import { EditDpForm } from '../forms/EditDpForm';
import { useFetchDpById } from '../../../../hooks/useFetchDpById';

export const ModalEdit = ({ show, handleClose, id }) => {

        const {eventsDp} = useFetchDpById(id)
   

    return (

        <>

            <Modal show={show} onHide={handleClose} className="mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 className="form-title mt-4">Editar Evento</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <EditDpForm eventsDp={eventsDp} handleClose={handleClose} />

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
