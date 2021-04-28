import React, { useState } from "react";

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
      console.log("paso por aqui");
      if (
        clients[i].satisfaction[index].reputation < clients[i].impReputation
      ) {
        clients[i].satisfaction[index].selected = true;
      } else {
        if (clients[i].satisfaction[index].satisfaction === 10) {
          clients[i].satisfaction[index].selected = "diez";
        }
      }
    }
  }
  console.log(clients);
  for (let i = 0; i < clients.length; i++) {
    for (let index = 0; index < clients[i].satisfaction.length; index++) {
      if (
        clients[i].satisfaction[index].selected === true &&
        trainers[index].places > 0
      ) {
        console.log("Plazas: " + trainers[index].places);
        trainers[index].places -= 1;
        console.log(trainers[index].name + clients[i].name);
        finalTrainers.push({
          trainerName: trainers[index].name,
          clientName: clients[i].name,
          satisfaction: clients[i].satisfaction[index].satisfaction,
        });
        break;
      } else if (
        clients[i].satisfaction[index].selected === "diez" &&
        trainers[index].places > 0
      ) {
        console.log("Plazas: " + trainers[index].places);
        trainers[index].places -= 1;
        console.log(trainers[index].name + clients[i].name);
        finalTrainers.push({
          trainerName: trainers[index].name,
          clientName: clients[i].name,
          satisfaction: clients[i].satisfaction[index].satisfaction,
        });
        break;
      }
    }
  }
  console.log(finalTrainers);
  return (
    <>
      <div>Página de resultados</div>
    </>
  );
}

export default ResultView;
