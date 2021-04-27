import { React } from "react";
import { Link } from "react-router-dom";

function ResultPage(props) {
  return (
    <>
      <h1>Página de resultados</h1>
      <Link to="/" className="btn-sm btn-primary float-right button">
        Volver
      </Link>
    </>
  );
}

export default ResultPage;
