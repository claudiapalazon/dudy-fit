import { React } from "react";
import { Row, Col } from "react-bootstrap";

function ValorationList(props) {
  return (
    <>
      <Row>
        <Col>Cliente: {props.data.clientName}</Col>
        <Col>Entrenador asignado: {props.data.trainerName}</Col>
        <Col>Satisfacción cliente: {props.data.satisfaction}</Col>
      </Row>
    </>
  );
}

export default ValorationList;
