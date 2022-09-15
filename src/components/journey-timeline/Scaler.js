import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Scaler() {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(0, 0, 0)", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        date="2011 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={""}
      >
        <h3 className="vertical-timeline-element-title">
          Carerr break for upskilling with Scaler Academy
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Learning the Data Structures and Algorithms in depth.</p>
      </VerticalTimelineElement>
    </>
  );
}

export default Scaler;
