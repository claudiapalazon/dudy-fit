import { React } from "react";
import { Row, Col } from "react-bootstrap";

function ClientsList(props) {
  return (
    <>
      <Row>
        <Col>Nombre cliente: {props.client.name}</Col>
        <Col>Importancia reputación: {props.client.impReputation}</Col>
      </Row>
    </>
  );
}

export default ClientsList;
