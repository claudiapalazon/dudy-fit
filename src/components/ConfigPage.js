import { Link } from "react-router-dom";
import PrepareModal from "./PrepareModal";
import TrainersForm from "./TrainersForm";

function ConfigPage(props) {
  const handleForm = (value, index, id) => {
    props.handleShownTrainers(value, index, id);
  };
  const trainersList = props.shownTrainers.map((trainer, index) => {
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
