import React from "react";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import Navigation from "./components/Navigation";
import Description from "./components/Description";
import Journey from "./components/Journey";
import CodeProfile from "./components/CodeProfile";
import Skills from "./components/Skills";
import Projects from "./components/Footer";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Container className="app-container">
        <Row className="navigation">
          <Navigation />
        </Row>
        <Row className="description">
          <Description />
        </Row>
        <Row className="journey">
          <Journey />
        </Row>
        <Row className="code-profile">
          <CodeProfile />
        </Row>
        <Row className="skills">
          <Skills />
        </Row>
        <Row ClassName="projects">
          <Projects />
        </Row>
        <Row className="connect">
          <Connect />
        </Row>
        <Row className="Footer">
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default App;
