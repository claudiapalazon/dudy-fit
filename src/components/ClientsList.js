import { React } from "react";
import { Row, Col } from "react-bootstrap";

function ClientsList(props) {
  return (
    <>
      <Row>
        <Col>{props.client.name}</Col>
        <Col>{props.client.impReputation}</Col>
      </Row>
    </>
  );
}

export default ClientsList;
