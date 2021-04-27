import { React } from "react";
import { Modal, Button } from "react-bootstrap";
import ClientsList from "./ClientsList";

function ModalItem(props) {
  const clients = props.clients.map((client, index) => {
    return (
      <li key={index}>
        <ClientsList client={client} />
      </li>
    );
  });
  return (
    <Modal
      {...props}
      animation={false}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Tabla de clientes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="clientsList">{clients}</ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Salir</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalItem;
