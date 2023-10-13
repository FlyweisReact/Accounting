/** @format */

import React from "react";
import { Modal } from "react-bootstrap";

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
        {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p> {props.desc} </p>
      </Modal.Body>
    </Modal>
  );
}
