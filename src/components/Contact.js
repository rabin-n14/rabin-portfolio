import React from "react";
import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Shake from "react-reveal/Shake";

function Contact() {
  return (
    <>
      <Container>
        <Wrapper>
          <Box>
            <div className="box">Error!</div>
            <p>
              <Shake delay={1500}>
                Please reach out to Rabin to fix this blunder:
              </Shake>

              <IconsDiv>
                <a href="mailto:rabinsunar182@gmail.com" target="_blank">
                  <EmailIcon className="iconsCss" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rabin-sunar-0398b71a5/"
                  target="_blank"
                >
                  <LinkedInIcon className="iconsCss" />
                </a>
              </IconsDiv>
            </p>
          </Box>
        </Wrapper>
      </Container>
    </>
  );
}

export default Contact;

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
  background-color: green;
  position: absolute;
  top: 50%;
  left: 38%;

  z-index: 1;
  display: flex;
  justify-content: space-around;
`;

const Box = styled.div`
  text-align: center;
  position: relative;
  .box {
    width: 250px;
    line-height: 80px;
    color: rgba(0, 58, 71, 0.95);
    background-color: #fff;
    font-size: 280%;
    font-weight: bold;
    font-family: "Source Code Pro", monospace;
    position: absolute;
    top: 40px;
    border-radius: 5px;
    cursor: default;

    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;

    animation: moving 5s linear infinite;
    -webkit-animation: moving 5s linear infinite;
    -moz-animation: moving 5s linear infinite;
    -o-animation: moving 5s linear infinite;

    transform-origin: 50% -400%;
    -webkittransform-origin: 50% -400%;
    -moz-transform-origin: 50% -400%;
    -o-transform-origin: 50% -400%;

    @keyframes moving {
      0%,
      100% {
        transform: rotate(0);
      }
      25% {
        transform: rotate(3deg);
      }
      50% {
        transform: rotate(-3deg);
      }
    }

    @-webkit-keyframes moving {
      0%,
      100% {
        transform: rotate(0);
      }
      25% {
        transform: rotate(3deg);
      }
      50% {
        transform: rotate(-3deg);
      }
    }

    @-moz-keyframes moving {
      0%,
      100% {
        transform: rotate(0);
      }
      25% {
        transform: rotate(3deg);
      }
      50% {
        transform: rotate(-3deg);
      }
    }

    @-o-keyframes moving {
      0%,
      100% {
        transform: rotate(0);
      }
      25% {
        transform: rotate(3deg);
      }
      50% {
        transform: rotate(-3deg);
      }
    }
  }

  .box:before {
    content: "";
    width: 25px;
    height: 25px;
    background-color: #fff;
    border-radius: 50%;
    display: block;
    position: absolute;
    left: 50%;
    top: -280px;

    -webkit-box-shadow: 5px 5px 15px 5px #000000;
    box-shadow: 5px 5px 15px 5px #000000;
  }

  .box:after {
    content: "";
    width: 3px;
    height: 256px;
    background-color: #fff;
    display: block;
    position: absolute;
    left: 54%;
    top: -255px;

    box-shadow: 6px 0px 6px 0px #000000;
  }

  p {
    position: absolute;
    top: 140px;
    left: 38%;
    color: #fff;
    width: 310px;
    font-size: 18px;
    font-family: "Source Code Pro", monospace;
    cursor: default;
    /* background-color: black; */
  }
`;

const IconsDiv = styled.div`
  /* background-color: black; */
  display: flex;
  width: 50%;
  margin: 0 auto;
  justify-content: space-around;

  color: white;
  a:link {
    color: white;
  }
  a:visited {
    color: white;
  }
  .iconsCss {
    cursor: pointer;
    font-size: 40px;
    transition: all 250ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
    &:hover {
      transform: scale(1.5);
      filter: drop-shadow(19px 17px 8px #000000);
    }
  }
`;
