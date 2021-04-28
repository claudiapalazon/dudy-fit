import { React } from "react";
import { Card } from "react-bootstrap";

function Cards(props) {
  return (
    <Card>
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>Card title that wraps to a new line</Card.Title>
        <Card.Text>
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <p>Holi soy un footer</p>
      </Card.Footer>
    </Card>
  );
}

export default Cards;
