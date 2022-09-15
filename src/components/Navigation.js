import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" fixed="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">rangaraju.in</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end ms-auto">
            {/* <Nav.Link href="#Description">Short Description</Nav.Link> */}
            <Nav.Link href="#journey">My Journey</Nav.Link>
            <Nav.Link href="#code-profile">Code Profile</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#connect">Connect with me </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
