import React from "react";
import styled from "styled-components";
import { ReactComponent as WorkIcon } from "../work.svg";
import { ReactComponent as SchoolIcon } from "../school.svg";
import timelineElements from "../timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Work() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <Container>
      <Wrapper>
        <h1>Timeline</h1>
        <VerticalTimeline>
          {timelineElements.map((element) => {
            let isWorkIcon = element.icon === "work";
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.org}
                </h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
}

export default Work;

const Container = styled.div`
  color: white;
  min-height: 75vh;
  border-radius: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  &:after {
    border-radius: 75px;
    background-color: black;
    content: "";
    min-height: 75vh;
    opacity: 0.5;
  }
`;

const Wrapper = styled.div`
  background-color: brown;
  position: absolute;
  color: black;
  height: 40vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
`;
