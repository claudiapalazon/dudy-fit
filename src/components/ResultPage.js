import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import dataClients from "../services/clients.json";
import ResultView from "./ResultView";
import Valoration from "./Valoration";

function ResultPage(props) {
  let sufPlaces = false;
  const arr = JSON.parse(JSON.stringify(props.trainers));
  let clients = JSON.parse(JSON.stringify(dataClients));
  const [globalValoration, setGlovalValoration] = useState(0);
  const [listFinalTrainers, setListFinalTrainers] = useState([]);

  const handlePlaces = (trainers) => {
    // Comprueba si hay suficientes plazas para los clientes.
    let places = 0;
    for (let i = 0; i < trainers.length; i++) {
      places += trainers[i].places;
    }
    places < clients.length ? (sufPlaces = true) : (sufPlaces = false);
    // Comprueba si hay más plazas que clientes.
    let restPlaces = 0;
    if (places > clients.length) {
      restPlaces = places - clients.length;
    }

    // Ordena los entrenadores de menor a mayor reputación. Si hay más plazas que clientes, comprueba si hay más en los entrenadores con poca reputación, y los resta o elimina a ese entrenador de la asignación.
    trainers.sort(function (a, b) {
      return a.reputation - b.reputation;
    });

    if (restPlaces) {
      for (let i = 0; i < trainers.length; ) {
        if (trainers[i].places > restPlaces) {
          trainers[i].places -= restPlaces;
          break;
        } else if (trainers[i].places === restPlaces) {
          trainers.splice(i, 1);
          break;
        } else if (trainers[i].places < restPlaces) {
          restPlaces -= trainers[i].places;
          trainers.splice(i, 1);
        }
        i = 0;
      }
    }
  };
  // Multiplica por dos la reputación para poder compararla con la importancia de los clientes.
  const handleReputation = (trainers) => {
    trainers.forEach((trainer) => (trainer.reputation *= 2));
  };

  handlePlaces(arr);
  handleReputation(arr);

  // Recibe la media global de satisfacción así como la lista con cada cliente, su entrenador asignado y la satisfacción con éste.
  let numValoration;
  let finalValTrainers = [];
  const handleNumValoration = (valoration, trainers) => {
    numValoration = valoration;
    finalValTrainers = trainers;
  };
  const handleValoration = () => {
    setGlovalValoration(numValoration);
    setListFinalTrainers(finalValTrainers);
  };

  return (
    <>
      <Row>
        {sufPlaces ? (
          <p className="sufplaces">
            No hay suficientes plazas para los clientes
          </p>
        ) : (
          <Col>
            <Tabs
              className="results"
              defaultActiveKey="results"
              id="uncontrolled-tab-example"
              onSelect={handleValoration}
            >
              <Tab eventKey="results" title="Entrenadores">
                <ResultView
                  trainers={arr}
                  clients={clients}
                  trainersfiltered={props.trainers}
                  handleValoration={handleNumValoration}
                />
              </Tab>
              <Tab eventKey="satisfaction" title="Valoración del conjunto">
                <Valoration
                  globalValoration={globalValoration}
                  listFinalTrainers={listFinalTrainers}
                />
              </Tab>
            </Tabs>
          </Col>
        )}
      </Row>
      <Link to="/" className="btn-sm btn-primary float-right button">
        Volver
      </Link>
    </>
  );
}

export default ResultPage;
