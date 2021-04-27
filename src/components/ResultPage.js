import { React } from "react";
import { Link } from "react-router-dom";

function ResultPage(props) {
  console.log(props.places);
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
