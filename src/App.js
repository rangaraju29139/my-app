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
      <Container fluid className="app-container">
        <Row className="Navigation main-components" id="navigation">
          <Navigation />
        </Row>
        <Row
          className="bg-success Description main-components"
          id="description"
        >
          <Description />
        </Row>

        <Row className="bg-primary journey main-components" id="journey">
          <Journey />
        </Row>
        <Row className="code-profile main-components" id="code-profile">
          <CodeProfile />
        </Row>
        <Row className="skills main-components" id="skills">
          <Skills />
        </Row>
        <Row ClassName="projects main-components" id="projects">
          <Projects />
        </Row>
        <Row className="bg-primary connect main-components" id="connect">
          <Connect />
        </Row>
        <Row className="Footer main-components" id="">
          <Footer />
        </Row>
      </Container>
    </>
  );
}

export default App;
