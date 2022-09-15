import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
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
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2002 - 2006"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={""}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={""}
            />
          </VerticalTimeline>
        </Row>
      </Container>
    </>
  );
}
export default Journey;
