import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
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
        <Row ClassName="navigation">
          <Navigation />
        </Row>
        <Row ClassName="navigation">
          <Navigation />
        </Row>
        <Row ClassName="description">
          <Description />
        </Row>
        <Row ClassName="journey">
          <Journey />
        </Row>
        <Row ClassName="code-profile">
          <CodeProfile />
        </Row>
        <Row ClassName="skills">
          <Skills />
        </Row>
        <Row ClassName="projects">
          <Projects />
        </Row>
        <Row ClassName="connect">
          <Connect />
        </Row>
        <Row ClassName="Footer">
          <Footer />
        </Row>
      </Container>
      {/* <Navigation /> */}
    </>
  );
}

export default App;
