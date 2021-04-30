import { Link } from "react-router-dom";
import PrepareModal from "./PrepareModal";
import TrainersForm from "./TrainersForm";
import { ListGroup } from "react-bootstrap";

function ConfigPage(props) {
  const handleForm = (value, index, id) => {
    props.handleShownTrainers(value, index, id);
  };
  const trainersList = props.shownTrainers.map((trainer, index) => {
    return (
      <ListGroup.Item key={trainer.id}>
        <TrainersForm
          trainer={trainer}
          clients={props.clients}
          index={index}
          handleForm={handleForm}
        />
      </ListGroup.Item>
    );
  });

  return (
    <>
      <ListGroup variant="flush">{trainersList}</ListGroup>
      <Link to="/results" className="btn-sm btn-primary float-right button">
        Calcular Resultados
      </Link>
      <PrepareModal clients={props.clients} />
    </>
  );
}

export default ConfigPage;
