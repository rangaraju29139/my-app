import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
  WorkIcon,
  SchoolIcon,
  StarIcon,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={""}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={""}
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={""}
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="November 2012"
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
              icon={""}
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
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
