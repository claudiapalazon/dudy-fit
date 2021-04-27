import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/App.scss";
import { Container } from "react-bootstrap";
import dataTrainers from "./services/trainers.json";
import dataClients from "./services/clients.json";
import ConfigPage from "./components/ConfigPage";
import ResultPage from "./components/ResultPage";

function App() {
  let arrShownTrainers = JSON.parse(JSON.stringify(dataTrainers));
  let clients = JSON.parse(JSON.stringify(dataClients));
  const [shownTrainers, setShownTrainers] = useState(arrShownTrainers);
  let arr = [];
  const [sufPlaces, setPlaces] = useState(false);

  const handlePlaces = (trainers) => {
    let places = 0;
    for (let i = 0; i < trainers.length; i++) {
      places += trainers[i].places;
    }
    places < clients.length ? setPlaces(true) : setPlaces(false);
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

  clients.sort(function (a, b) {
    return a.impReputation - b.impReputation;
  });

  const handleShownTrainers = (value, index, id, position) => {
    if (id === "name") {
      arrShownTrainers[index].name = value;
    } else if (id === "reputation") {
      let number = parseFloat(value);
      arrShownTrainers[index].reputation = number;
    } else if (id === "places") {
      let number = parseInt(value);
      arrShownTrainers[index].places = number;
    }
    setShownTrainers(arrShownTrainers);
  };

  const handleTrainers = () => {
    const myJSONCopy = JSON.parse(JSON.stringify(arrShownTrainers));
    arr = myJSONCopy;
    console.log(shownTrainers);
    console.log(arr);
    handlePlaces(arr);
    handleReputation(arr);
  };

  return (
    <Container fluid>
      <Switch>
        <Route exact path="/">
          <ConfigPage
            clients={clients}
            handleTrainers={handleTrainers}
            shownTrainers={shownTrainers}
            handleShownTrainers={handleShownTrainers}
          />
        </Route>
        <Route path="/results">
          <ResultPage trainers={arr} places={sufPlaces} />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
