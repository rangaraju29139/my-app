import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Container className="app-container">
        <Navigation>This is Navigation</Navigation>
      </Container>
      {/* <Navigation /> */}
    </>
  );
}

export default App;
