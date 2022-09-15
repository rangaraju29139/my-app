import React from "react";
import { Container, Card, CardGroup, Row } from "react-bootstrap";

function Skills() {
  return (
    <Container fluid m-2 p-2>
      <Row mt-3>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="../assets/images/scalerLogo.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Row>
    </Container>
  );
}
export default Skills;
