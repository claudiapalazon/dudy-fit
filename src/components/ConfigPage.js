import React, { useState } from "react";
import { Link } from "react-router-dom";
import dataTrainers from "../services/trainers.json";
import PrepareModal from "./PrepareModal";
import TrainersForm from "./TrainersForm";

function ConfigPage(props) {
  let arrTrainers = JSON.parse(JSON.stringify(dataTrainers));
  const [trainers, setTrainers] = useState(arrTrainers);
  console.log(trainers);
  const handleForm = (value, index, id) => {
    if (id === "name") {
      arrTrainers[index].name = value;
    } else if (id === "reputation") {
      let number = parseFloat(value);
      arrTrainers[index].reputation = number;
    } else if (id === "places") {
      let number = parseInt(value);
      arrTrainers[index].places = number;
    }
    const identification = trainers[index].id;
    props.handleTrainers(value, identification, id);
    setTrainers(arrTrainers);
    console.log(trainers);
  };
  const trainersList = trainers.map((trainer, index) => {
    return (
      <li key={trainer.id} className="trainerForm">
        <TrainersForm
          trainer={trainer}
          clients={props.clients}
          index={index}
          handleForm={handleForm}
        />
      </li>
    );
  });

  return (
    <>
      <ul className="trainersList">{trainersList}</ul>
      <Link to="/results" className="btn-sm btn-primary float-right button">
        Calcular Resultados
      </Link>
      <PrepareModal clients={props.clients} />
    </>
  );
}

export default ConfigPage;
