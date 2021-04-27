import { React, useState } from "react";
import { Button } from "react-bootstrap";
import ModalItem from "./ModalItem";

function PrepareModal(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <Button
        variant="outline-primary"
        size="sm"
        className="float-right button"
        onClick={() => setModalShow(true)}
      >
        Ver tabla de clientes
      </Button>
      <ModalItem
        show={modalShow}
        onHide={() => setModalShow(false)}
        clients={props.clients}
      />
    </>
  );
}

export default PrepareModal;
