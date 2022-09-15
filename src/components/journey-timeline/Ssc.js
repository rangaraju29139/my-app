import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Ssc() {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2013- 2015"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Xth - Sri Kakatiya Merit School .
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Bhimavaram, Andhra Pradesh,India
        </h4>
        <p>CGPA: 9.7 / 10 </p>
      </VerticalTimelineElement>
    </>
  );
}

export default Ssc;
