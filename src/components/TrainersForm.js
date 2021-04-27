import React from "react";
import { Form } from "react-bootstrap";

function TrainersForm(props) {
  const optionPlaces = props.clients.map((client, number) => {
    return <option key={number}>{number + 1}</option>;
  });
  const handleInputs = (env) => {
    let value = env.currentTarget.value;
    let index = props.index;
    let id = env.currentTarget.id;

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
