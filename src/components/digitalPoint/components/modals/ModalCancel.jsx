import { Button, Modal } from 'react-bootstrap';
import { useForm, useModal } from '../../../../hooks';

export const ModalCancel = ({ show, handleClose, id, title }) => {

    /*revisar con Context*/
    const {
        setResponseMsg,
        setShowResOk,
        setShowResBad,
        showResOk,
        showResBad,
        responseMsg,
    } = useForm();



    const handleConfirmDeletion = async () => {


        try {
            const response = await fetch("http://localhost:4001/api/punto-digital/delete/", {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });
            if (!response.ok) {
                throw new Error('Error deleting event');
            }
            const res = await response.json(); // Parse the JSON data from the response 

            if (res.status === 201) {
                setResponseMsg(res);
                setShowResOk(true);
                setShowResBad(false);
                handleClose();

            } else {
                setShowResBad(true);
                setResponseMsg(res);
                console.log("-------------------")
                console.log(res)
                console.log("-------------------")
            }

            handleClose();
        } catch (error) {
            console.error('Error deleting Event:', error);
        }
    };

    return (

        <>

            <Modal show={show} onHide={handleClose} className="mt-5">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h3 className="form-title mt-4"> ¿Desea elimiar el evento: {title}?  </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    {/* <Button onClick={handleClose}>
                        Cancelar
                    </Button> */}
                    <Button onClick={handleConfirmDeletion}>
                        Sí, eliminar
                    </Button>

                </Modal.Body>
            </Modal>

        </>
    )
}
