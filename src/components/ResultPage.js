import React from "react";
import { Link } from "react-router-dom";
import dataClients from "../services/clients.json";
import ResultView from "./ResultView";

function ResultPage(props) {
  let sufPlaces = false;
  const arr = JSON.parse(JSON.stringify(props.trainers));
  let clients = JSON.parse(JSON.stringify(dataClients));

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

  return (
    <>
      {sufPlaces ? (
        <h1>No hay suficientes plazas para los clientes</h1>
      ) : (
        <ResultView trainers={arr} clients={clients} />
      )}
      <Link to="/" className="btn-sm btn-primary float-right button">
        Volver
      </Link>
    </>
  );
}

export default ResultPage;
