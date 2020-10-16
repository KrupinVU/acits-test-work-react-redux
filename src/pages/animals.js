import React, { useContext } from "react";
import Modal from "../components/modal";
import { ModalContext } from "../context/modal/modalContext";
import { Card } from "react-bootstrap";

function Animals({animals}) {
  const {modal, show} = useContext(ModalContext);
  return (
    <>
      {modal.visible && <Modal animals={animals}/>}
      <ul className="list-group" style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {animals.map((animal) => (
          <li key={animal.id} className="list-group-item" onClick={() => show(animal.id)} style={{ width: '30%' }}>
            <Card>
              <Card.Img variant="top" src={animal.img} alt='Изображение животного' style={{objectFit: 'cover', height: '300px'}}/>
              <Card.Body>
                <Card.Title>{animal.type}</Card.Title>
                <Card.Text>
                  <p>Имя: {animal.name}</p>
                  <p>Порода: {animal.species}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Animals;