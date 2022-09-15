import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Intermediate() {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2013- 2015"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Intermediate at Sri Chaitanya Jr college.
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Vijayawada, Andhra Pradesh,India
        </h4>
        <p>Total Marks: 96.1%</p>
      </VerticalTimelineElement>
    </>
  );
}

export default Intermediate;
