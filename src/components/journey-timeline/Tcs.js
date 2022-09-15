import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function Tcs() {
  return (
    <>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="july 2019 - March 2022"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Devops Engineer at Tata Consultancy Services
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Hyderabad</h4>
        <p>I worked on different devops tools like ansible , jenkins</p>
      </VerticalTimelineElement>
    </>
  );
}

export default Tcs;
