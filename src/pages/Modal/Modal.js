import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export const MyModal = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setShow(!show)}>Modal</Button>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
