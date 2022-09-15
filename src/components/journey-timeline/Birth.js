import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Birth() {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="july 2019 - March 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Birth - August 12 1997.
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          Bhimavaram, Andhra Pradesh,India
        </h4>
        <p></p> */}
      </VerticalTimelineElement>
    </>
  );
}

export default Birth;
