import { React } from "react";
import { Row, Col } from "react-bootstrap";

function ValorationList(props) {
  let number = props.data.satisfaction.toFixed(1);
  return (
    <>
      <Row>
        <Col>Cliente: {props.data.clientName}</Col>
        <Col>Entrenador asignado: {props.data.trainerName}</Col>
        <Col>Satisfacción cliente: {number}</Col>
      </Row>
    </>
  );
}

export default ValorationList;
