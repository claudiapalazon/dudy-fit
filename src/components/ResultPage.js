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

  const handlePlaces = (trainers) => {
    let places = 0;
    for (let i = 0; i < trainers.length; i++) {
      places += trainers[i].places;
    }
    places < clients.length ? (sufPlaces = true) : (sufPlaces = false);
    let restPlaces = 0;
    if (places > clients.length) {
      restPlaces = places - clients.length;
    }
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
  const handleReputation = (trainers) => {
    trainers.forEach((trainer) => (trainer.reputation *= 2));
  };

  handlePlaces(arr);
  handleReputation(arr);

  let numValoration;
  const handleNumValoration = (valoration) => {
    numValoration = valoration;
  };

  const handleValoration = () => {
    setGlovalValoration(numValoration);
  };

  return (
    <>
      <Row>
        <Col>
          <Tabs
            className="results"
            defaultActiveKey="results"
            id="uncontrolled-tab-example"
            onSelect={handleValoration}
          >
            <Tab eventKey="results" title="Resultados">
              {sufPlaces ? (
                <h1>No hay suficientes plazas para los clientes</h1>
              ) : (
                <ResultView
                  trainers={arr}
                  clients={clients}
                  trainersfiltered={props.trainers}
                  handleValoration={handleNumValoration}
                />
              )}
            </Tab>
            <Tab eventKey="satisfaction" title="Valoración Global">
              <Valoration globalValoration={globalValoration} />
            </Tab>
          </Tabs>
        </Col>
      </Row>

      <Link to="/" className="btn-sm btn-primary float-right button">
        Volver
      </Link>
    </>
  );
}

export default ResultPage;
