import { React } from "react";
import { Link } from "react-router-dom";
import dataClients from "../services/clients.json";

function ResultPage(props) {
  // console.log(props.prueba);
  let clients = JSON.parse(JSON.stringify(dataClients));
  clients.sort(function (a, b) {
    return a.impReputation - b.impReputation;
  });
  for (let i = 0; i < clients.length; i++) {
    clients[i].satisfaction = [];
    // for (let index = 0; i < props.trainers.length; index++) {
    //   // console.log("paso por aquiii");
    //   let satisfaction =
    //     10 - (clients[i].impReputation - props.trainers[index].reputation);
    //   console.log(satisfaction);
    //   clients[i].satisfaction.push(
    //     `${props.trainers[index].name}: ${satisfaction}`
    //   );
    // }
  }
  return (
    <>
      {props.places ? (
        <h1>No hay suficientes plazas para los clientes</h1>
      ) : (
        <h1>Página de resultados</h1>
      )}
      <Link to="/" className="btn-sm btn-primary float-right button">
        Volver
      </Link>
    </>
  );
}

export default ResultPage;
