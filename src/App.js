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

  const handleShownTrainers = (value, index, id, position) => {
    if (id === "name") {
      arrShownTrainers[index].name = value;
    } else if (id === "reputation") {
      if (isNaN(value) || !value) {
        value = 0;
      }
      let number = parseFloat(value);
      arrShownTrainers[index].reputation = number;
    } else if (id === "places") {
      let number = parseInt(value);
      arrShownTrainers[index].places = number;
    }
    setShownTrainers(arrShownTrainers);
  };

  return (
    <Container fluid>
      <Switch>
        <Route exact path="/">
          <ConfigPage
            clients={clients}
            shownTrainers={shownTrainers}
            handleShownTrainers={handleShownTrainers}
          />
        </Route>
        <Route path="/results">
          <ResultPage trainers={shownTrainers} />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
