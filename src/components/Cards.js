import { React } from "react";
import {
  Card,
  OverlayTrigger,
  Tooltip,
  Button,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import image from "../images/foto.jpg";

function Cards(props) {
  let asigClients = 0;
  const listClients = props.clientstrainer.map((trainer, index) => {
    if (trainer.trainerName === props.trainer.name) {
      asigClients += 1;
      return (
        <span key={index}>
          - {trainer.clientName} <br />
        </span>
      );
    } else {
      return null;
    }
  });

  return (
    <Card>
      <Card.Header>
        Entrenador {props.index}
        <OverlayTrigger
          placement="bottom"
          overlay={
            <Tooltip id="tooltip-bottom" className="tooltip">
              <strong>Valoración: {props.trainer.reputation}</strong>
              <br />
              <strong>Max clientes: {props.trainer.places}</strong>
            </Tooltip>
          }
        >
          <Button className="float-right btn-circle" variant="dark">
            i
          </Button>
        </OverlayTrigger>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={3} md={2}>
            <Image src={image} width={40} height={40} roundedCircle />
          </Col>
          <Col>
            <Card.Title>{props.trainer.name}</Card.Title>
            <Card.Text>
              Clientes asignados: <br />
              {asigClients === 0 ? "No se han asignado clientes" : listClients}
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>{asigClients} clientes asignados</Card.Footer>
    </Card>
  );
}

export default Cards;
