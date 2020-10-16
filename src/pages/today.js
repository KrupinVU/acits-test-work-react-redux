import React, { useContext } from "react";
import Modal from "../components/modal";
import { ModalContext } from "../context/modal/modalContext";
import { Card } from "react-bootstrap";

function Today({animals}) {
  const {modal, show} = useContext(ModalContext);
  const today = () => {
    const date = new Date();
    return (date.toLocaleDateString());
  };
  const todayAnimals = animals.filter(animal => animal.destination.date === today());
  return (
    <>
      {modal.visible && <Modal animals={animals}/>}
      <ul className="list-group"  style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {todayAnimals.map((animal) => (
          <li key={animal.id} className="list-group-item" onClick={() => show(animal.id)} style={{ width: '30%' }}>
            <Card>
              <Card.Img variant="top" src={animal.img} alt='Изображение животного' style={{objectFit: 'cover', height: '300px'}}/>
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>
                  <p>Заболевание: {animal.diagnosis}</p>
                  <p>Лечение: {animal.medicine}</p>
                  <p>Назначено на {animal.destination.time}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Today;