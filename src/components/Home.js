import React, { useEffect } from "react";
import styled from "styled-components";
import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <Container>
      <Wrapper>
        <NameDiv>
          <Spin>
            <h1>Rabin Sunar</h1>
          </Spin>
        </NameDiv>

        <ProfDiv>
          <h3>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(1000)
                  .typeString(`<>Front-End Web Development</>`)
                  .pauseFor(500)
                  .deleteChars(8)
                  .typeString(`per</>`)
                  .pauseFor(3000)
                  .deleteAll()
                  .typeString(`Navigate through above menus to see my works.`)
                  .start();
              }}
            />
          </h3>
        </ProfDiv>

        <Fade top>
          <IconsDiv>
            <a
              href="https://www.linkedin.com/in/rabin-sunar-0398b71a5/"
              target="_blank"
            >
              <LinkedInIcon className="iconsCss" />
            </a>
            <a href="https://github.com/rabin-n14" target="_blank">
              <GitHubIcon className="iconsCss" />
            </a>
          </IconsDiv>
        </Fade>
      </Wrapper>
    </Container>
  );
}

export default Home;

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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: default;
`;

const NameDiv = styled.div`
  font-size: 40px;
  font-family: "Cinzel", serif;
  -webkit-text-stroke-color: #006d9c;
  transition-duration: 1.5s;
  &:hover {
    text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.93);
    transform: scale(1.05);
    transition-duration: 0.5s;
  }
`;

const ProfDiv = styled.div`
  font-size: 25px;
  font-family: "Quantico", sans-serif;
`;

const IconsDiv = styled.div`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;
  color: white;
  a:visited {
    color: white;
  }
  .iconsCss {
    cursor: pointer;
    font-size: 60px;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    &:hover {
      transform: scale(1.5);
      filter: drop-shadow(19px 17px 8px #000000);
    }
  }
`;
