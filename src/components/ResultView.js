import React from "react";
import Cards from "./Cards";
import { CardColumns } from "react-bootstrap";

function ResultView(props) {
  let clients = JSON.parse(JSON.stringify(props.clients));
  let trainers = JSON.parse(JSON.stringify(props.trainers));
  let finalTrainers = [];

  clients.sort(function (a, b) {
    return a.impReputation - b.impReputation;
  });

  for (let i = 0; i < clients.length; i++) {
    clients[i].satisfaction = [];
    for (let index = 0; index < trainers.length; index++) {
      let satisfaction =
        10 - (clients[i].impReputation - trainers[index].reputation);
      if (satisfaction > 10) {
        satisfaction = 10;
      }
      clients[i].satisfaction.push({
        name: trainers[index].name,
        places: trainers[index].places,
        reputation: trainers[index].reputation,
        satisfaction: satisfaction,
      });
    }
  }

  for (let i = 0; i < clients.length; i++) {
    for (let index = 0; index < clients[i].satisfaction.length; index++) {
      if (
        clients[i].satisfaction[index].reputation < clients[i].impReputation
      ) {
        clients[i].satisfaction[index].selected = true;
      } else {
        if (clients[i].satisfaction[index].satisfaction === 10) {
          clients[i].satisfaction[index].selected = "ten";
        }
      }
    }
  }
  for (let i = 0; i < clients.length; i++) {
    for (let index = 0; index < clients[i].satisfaction.length; index++) {
      if (
        clients[i].satisfaction[index].selected === true &&
        trainers[index].places > 0
      ) {
        trainers[index].places -= 1;
        finalTrainers.push({
          trainerName: trainers[index].name,
          clientName: clients[i].name,
          satisfaction: clients[i].satisfaction[index].satisfaction,
        });
        break;
      } else if (
        clients[i].satisfaction[index].selected === "ten" &&
        trainers[index].places > 0
      ) {
        trainers[index].places -= 1;
        finalTrainers.push({
          trainerName: trainers[index].name,
          clientName: clients[i].name,
          satisfaction: clients[i].satisfaction[index].satisfaction,
        });
        break;
      }
    }
  }
  console.log(clients);
  console.log(finalTrainers);
  console.log(props.trainers);
  console.log(props.trainersfiltered);

  let globalValoration = 0;
  for (let i = 0; i < finalTrainers.length; i++) {
    globalValoration += finalTrainers[i].satisfaction;
  }
  props.handleValoration(globalValoration);

  const finalArr = props.trainersfiltered.map((trainer, index) => {
    return (
      <Cards
        key={index}
        trainer={trainer}
        clientstrainer={finalTrainers}
        index={index + 1}
      />
    );
  });

  return <CardColumns className="cards mx-auto">{finalArr}</CardColumns>;
}

export default ResultView;
