import React from "react";
import { Container, ProgressBar, ListGroup } from "react-bootstrap";
import ValorationList from "./ValorationList";

function Valoration(props) {
  const valorations = props.listFinalTrainers.map((valoration, index) => {
    return (
      <ListGroup.Item key={index}>
        <ValorationList data={valoration} />
      </ListGroup.Item>
    );
  });
  let number = props.globalValoration.toFixed(1);
  return (
    <Container className="valoration">
      <h3>Valoración global</h3>
      <h4>{number}</h4>
      <ProgressBar className="progressbar" now={number} />
      <p>
        Para calcular la valoración global se ha realizado una media de la
        satisfacción de los clientes con sus entrenadores asignados.
        <br />
        Para hacer esa asignación, se ha partido de comprobar la satisfacción de
        cada cliente con cada uno de los entrenadores. Teniendo en cuenta la
        importancia de la valoración de los clientes, posteriormente se han
        seleccionado los más idóneos para cada uno teniendo en cuenta conseguir
        la mayor valoración global. A continuación se muestran los datos de cada
        cliente con su entrenador asignado y la satisfacción con éste.
      </p>
      <ListGroup variant="flush">{valorations}</ListGroup>
    </Container>
  );
}

export default Valoration;
