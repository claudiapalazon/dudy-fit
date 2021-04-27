import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./styles/App.scss";
import { Container } from "react-bootstrap";
import dataTrainers from "./services/trainers.json";
import dataClients from "./services/clients.json";
import ConfigPage from "./components/ConfigPage";
import ResultPage from "./components/ResultPage";

function App() {
  let arrTrainers = JSON.parse(JSON.stringify(dataTrainers));
  let clients = JSON.parse(JSON.stringify(dataClients));

  const [trainers, setTrainers] = useState(arrTrainers);

  const handlePlaces = () => {
    let places = 0;
    for (let i = 0; i < trainers.length; i++) {
      places += trainers[i].places;
    }
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
  const handleReputation = () => {
    trainers.forEach((trainer) => (trainer.reputation *= 2));
  };

  handlePlaces();
  handleReputation();

  clients.sort(function (a, b) {
    return a.impReputation - b.impReputation;
  });

  const handleTrainers = (value, index, id) => {
    let positionArray;
    for (let i = 0; i < arrTrainers.length; i++) {
      if (arrTrainers[i].id === index) {
        positionArray = i;
        break;
      }
    }
    if (id === "name") {
      arrTrainers[positionArray].name = value;
    } else if (id === "reputation") {
      let number = parseFloat(value);
      arrTrainers[positionArray].reputation = number * 2;
    } else if (id === "places") {
      let number = parseInt(value);
      arrTrainers[positionArray].places = number;
    }
    setTrainers(arrTrainers);
    handlePlaces();
  };

  return (
    <Container fluid>
      <Switch>
        <Route exact path="/">
          <ConfigPage
            trainers={trainers}
            clients={clients}
            handleTrainers={handleTrainers}
          />
        </Route>
        <Route path="/results">
          <ResultPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
