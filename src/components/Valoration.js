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
      <p className="solutionText">
        La valoración global corresponde a la media de los valores de
        satisfacción de los clientes con sus entrenadores asignados.
      </p>
      <p className="solutionText">
        Para llevar a cabo dicha asignación, se ha calculado previamente el
        valor de la satisfacción de los clientes con cada uno de los
        entrenadores, con el fin de obtener la mayor satisfacción posible. Para
        obtener el valor de satisfacción de cada cliente con los diferentes
        entrenadores, se ha calculado la siguiente operación: 10 - (importancia
        de la reputación - reputación del entrenador). Obteniendo de esta manera
        un valor comprendido entre 0 y 10, siendo 0 la menor satisfacción y 10
        la mayor (los valores obtenidos por encima de 10 se toman como 10).
      </p>
      <p className="solutionText">
        A continuación se muestran el valor de satisfacción de cada cliente con
        su entrenador asignado:
      </p>
      <ListGroup variant="flush">{valorations}</ListGroup>
    </Container>
  );
}

export default Valoration;
