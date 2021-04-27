import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";

function TrainersForm(props) {
  const [show, setShow] = useState(false);
  const optionPlaces = props.clients.map((client, number) => {
    return <option key={number}>{number + 1}</option>;
  });
  const handleInputs = (env) => {
    let value = env.currentTarget.value;
    let index = props.index;
    let id = env.currentTarget.id;

    if (id === "reputation") {
      if (!value || isNaN(value) || value > 5 || value < 0) {
        setShow(true);
        if (value < 0) {
          value = 0;
        } else if (value > 5) {
          value = 5;
        }
      } else {
        setShow(false);
      }
    }
    props.handleForm(value, index, id);
  };

  return (
    <div className="table-trainer">
      <p>Entrenador {props.trainer.id}</p>
      <Form inline>
        <Form.Label className="my-1 mr-2" htmlFor="name">
          Nombre
        </Form.Label>
        <Form.Control
          size="sm"
          className="my-1 mr-sm-2"
          id="name"
          placeholder="Nombre"
          defaultValue={props.trainer.name}
          onChange={handleInputs}
        />
        <Form.Label className="my-1 mr-2" htmlFor="valoration">
          Valoración
        </Form.Label>
        <Form.Control
          size="sm"
          className="my-1 mr-sm-2"
          id="reputation"
          placeholder="Valoración"
          defaultValue={props.trainer.reputation}
          onChange={handleInputs}
        />
        {show ? (
          <Alert className="alert mb-0" variant="danger">
            Por favor, escribe números del 0 al 5
          </Alert>
        ) : (
          ""
        )}
        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Número máximo de clientes
        </Form.Label>
        <Form.Control
          id="places"
          as="select"
          size="sm"
          custom
          defaultValue={props.trainer.places}
          onChange={handleInputs}
        >
          {optionPlaces}
        </Form.Control>
      </Form>
    </div>
  );
}

export default TrainersForm;
