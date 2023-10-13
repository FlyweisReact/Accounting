import React from 'react'


export function DescModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Privacy Policy
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }

