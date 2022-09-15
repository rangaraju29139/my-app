import React from "react";
import { Container, Row } from "react-bootstrap";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Btech from "./journey-timeline/Btech";
import Intermediate from "./journey-timeline/Intermediate";
import Scaler from "./journey-timeline/Scaler";
import Ssc from "./journey-timeline/Ssc";
import Tcs from "./journey-timeline/Tcs";
import Birth from "./journey-timeline/Birth";

function Journey() {
  return (
    <>
      <Container>
        <Row>
          <Container fluid p-5 m-5>
            <h1>My Journey</h1>
          </Container>
        </Row>
        <Row>
          <VerticalTimeline>
            <Scaler />
            <Tcs />
            <Btech />
            <Intermediate />
            <Ssc />
            <Birth />
          </VerticalTimeline>
        </Row>
      </Container>
    </>
  );
}
export default Journey;
