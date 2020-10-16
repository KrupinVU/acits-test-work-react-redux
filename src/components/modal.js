import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { ModalContext } from "../context/modal/modalContext";

function Card({animals}) {
  const {modal, hide} = useContext(ModalContext);
  const animal = animals[modal.id-1];
  return (
    <>
      <Modal
        show={modal.visible}
        onHide={() => hide()}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          {animal.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{animal.type}</p>
          <p>Порода: {animal.species}</p>
          <p>{animal.age} полных лет</p>
          <p>{animal.weight} кг</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Card;