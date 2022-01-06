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
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString(`Or you can take a look at my below profiles:`)
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  &:after {
    border-radius: 75px;
    background-color: black;
    content: "";
    min-height: 75vh;
    @media (max-width: 695px) {
      min-height: 65vh;
    }
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
  @media (max-width: 591px) {
    width: 75%;
  }
  @media (max-width: 591px) {
    width: 80%;
  }
  @media (max-width: 574px) {
    width: 85%;
  }
  @media (max-width: 477px) {
    width: 90%;
  }
  @media (max-width: 413px) {
    width: 91%;
  }
  @media (max-width: 291px) {
    width: 93%;
  }
  @media (max-width: 285px) {
    width: 95%;
  }
  @media (max-width: 279px) {
    width: 97%;
  }
  @media (max-width: 273px) {
    width: 98%;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: default;
`;

const NameDiv = styled.div`
  font-size: 40px;
  @media (max-width: 868px) {
    font-size: 35px;
  }
  @media (max-width: 695px) {
    font-size: 30px;
  }
  @media (max-width: 591px) {
    font-size: 27px;
  }
  @media (max-width: 540px) {
    font-size: 24px;
  }
  @media (max-width: 450px) {
    font-size: 22px;
  }
  @media (max-width: 407px) {
    font-size: 21px;
  }
  @media (max-width: 370px) {
    font-size: 20px;
  }
  @media (max-width: 335px) {
    font-size: 19px;
  }
  @media (max-width: 307px) {
    font-size: 18px;
  }
  @media (max-width: 273px) {
    font-size: 17px;
  }
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
  text-align: center;
  @media (max-width: 868px) {
    font-size: 20px;
  }
  @media (max-width: 695px) {
    font-size: 18px;
  }
  @media (max-width: 695px) {
    font-size: 17px;
  }
  @media (max-width: 540px) {
    font-size: 15px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
  @media (max-width: 407px) {
    font-size: 13px;
  }
  @media (max-width: 379px) {
    font-size: 12px;
  }
  @media (max-width: 350px) {
    font-size: 11px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
  @media (max-width: 307px) {
    margin-top: 10px;
  }
  @media (max-width: 273px) {
    font-size: 9px;
  }
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
    @media (max-width: 868px) {
      font-size: 55px;
    }
    @media (max-width: 695px) {
      font-size: 50px;
    }
    @media (max-width: 500px) {
      font-size: 55px;
    }
    @media (max-width: 407px) {
      font-size: 52px;
    }
    @media (max-width: 378px) {
      font-size: 55px;
    }
    @media (max-width: 307px) {
      font-size: 52px;
    }
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    &:hover {
      transform: scale(1.5);
      filter: drop-shadow(19px 17px 8px #000000);
    }
  }
`;
