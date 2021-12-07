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
import Zoom from "react-reveal/Zoom";

function Work() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <Container>
      <Wrapper>
        <Zoom top>
          <h1>Career Timeline</h1>
        </Zoom>

        <TimeLine>
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
                  <h3 className="vertical-timeline-element-title" id="fontDark">
                    {element.title}
                  </h3>
                  <h5
                    className="vertical-timeline-element-subtitle"
                    id="fontDark"
                  >
                    {element.org}
                  </h5>
                  <p id="description" id="fontDark">
                    {element.description}
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
          <div class="cover_top"></div>
          <div class="cover_bottom"></div>
        </TimeLine>
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
  /* background-color: brown; */
  position: absolute;
  color: white;
  height: 70vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  h1 {
    font-family: "Cinzel", serif;
  }
`;

const TimeLine = styled.div`
  /* background-color: blue; */
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  position: relative;
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    box-shadow: inset 0 0 5px gray;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  #fontDark {
    color: black;
  }

  p {
    font-family: "Dosis", sans-serif;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 1px;
  }

  .vertical-timeline-element-content {
    padding: 0.8em;
  }
  .vertical-timeline-element-content .vertical-timeline-element-date {
    font-family: "Open Sans Condensed", sans-serif;
    letter-spacing: 2px;
    font-size: 20px;
    font-weight: bold;
  }
  .vertical-timeline-element-title,
  .vertical-timeline-element-subtitle {
    font-family: "Open Sans Condensed", sans-serif;
    letter-spacing: 2px;
  }

  .cover_top {
    /* position: absolute; */
    width: 97%;
    position: fixed;
    left: 0;
    top: 50px;
    right: 0;
    height: 25px;
    background: -webkit-gradient(
      linear,
      0% 0%,
      0% 100%,
      from(rgba(1, 40, 48, 0.7)),
      color-stop(0.9, rgb(1, 40, 48, 0))
    );
  }

  .cover_bottom {
    width: 97%;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    height: 25px;
    background: -webkit-gradient(
      linear,
      0% 50%,
      0% 100%,
      from(rgba(1, 40, 48, 0)),
      color-stop(0.9, rgb(1, 40, 48, 0.7))
    );
  }
`;
