import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Modal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>
        ??
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            El usuario {email} se ha {action} correctamente.
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </>
  );
}

render(<Modal />);