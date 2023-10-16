import React from 'react'
import {  Button,  Modal } from 'react-bootstrap';

const ModalTemplate = ({title, modalForm, buttonOne, buttonOneText, show, onHide }) => {


  return (
    <Modal show={show} onHide={onHide} className="mt-5">
        <Modal.Header closeButton>
          <Modal.Title>
            <h3 className="form-title mt-4">{title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {modalForm}
          <Modal.Footer>
            <Button onClick={buttonOne}>
              {buttonOneText}
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
  )
}

export default ModalTemplate
