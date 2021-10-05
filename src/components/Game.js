import { Card, ListGroup } from "react-bootstrap";
import "../styles/GameCard.css";
function Game(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="userCard">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src={props.img} />
        </a>
        <hr />
        <Card.Body>
          <Card.Title>
            {" "}
            <a
              href={props.url}
              target="_blank"
              rel="noopener noreferrer"
              className="url text-decoration-none text-dark title"
            >
              {props.title}
            </a>{" "}
          </Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item className="publisher">
              {props.publisher}
            </ListGroup.Item>
            <ListGroup.Item>{props.desc}</ListGroup.Item>
            {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
          </ListGroup>
        </Card.Body>
      </Card>{" "}
      <br />
    </div>
  );
}
export default Game;
