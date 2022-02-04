import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fade from "react-reveal/Fade";
import AnimatedPage from "./AnimatedPage";

function Project() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnFocus: true,
  };

  return (
    <>
      <AnimatedPage>
        <Container>
          <ProjectsFlex>
            <Carousel {...settings}>
              <TeslaSlide>
                <SlideHeading>
                  <h1>Tesla Clone</h1>
                </SlideHeading>
                <SlideImgDes>
                  <SlideImage>
                    <video autoPlay loop playsInLine muted>
                      <source src="/videos/tesla_vid.mp4" type="video/mp4" />
                    </video>
                    <FadedBox>
                      <a
                        href="https://rabin-tesla-clone-2021.netlify.app/"
                        target="_blank"
                      >
                        <div className="boxSides">
                          View Project
                          <VisibilityIcon />
                        </div>
                      </a>
                      <div className="vrLine"></div>
                      <a
                        href="https://github.com/rabin-n14/tesla-clone-app"
                        target="_blank"
                      >
                        <div className="boxSides">
                          Source Code
                          <GitHubIcon />
                        </div>
                      </a>
                    </FadedBox>
                  </SlideImage>
                  <Fade bottom duration={3000}>
                    <SlideDescription>
                      <CodeIcon fontSize="small" />
                      &nbsp;Built with ReactJS & ReduxJS.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Menu Button is clickable.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Fully Responsive.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Note: Hover the Preview.
                    </SlideDescription>
                  </Fade>
                </SlideImgDes>
              </TeslaSlide>

              <DisneySlide>
                <SlideHeading>
                  <h1>Disney Clone</h1>
                </SlideHeading>
                <SlideImgDes>
                  <SlideImage>
                    <video autoPlay loop playsInLine muted>
                      <source src="/videos/disney_vid.mp4" type="video/mp4" />
                    </video>
                    <FadedBox>
                      <a
                        href="https://disneyplus-clone-rabin.firebaseapp.com"
                        target="_blank"
                      >
                        <div className="boxSides">
                          View Project
                          <VisibilityIcon />
                        </div>
                      </a>
                      <div className="vrLine"></div>
                      <a
                        href="https://github.com/rabin-n14/disney-clone"
                        target="_blank"
                      >
                        <div className="boxSides">
                          Source Code
                          <GitHubIcon />
                        </div>
                      </a>
                    </FadedBox>
                  </SlideImage>
                  <Fade bottom duration={3000}>
                    <SlideDescription>
                      <CodeIcon fontSize="small" />
                      &nbsp;Built with ReactJS, ReduxJS & Firebase.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Sign-in and out with Gmail.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Each Movies are clickable.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Fully Responsive.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Note: Hover the Preview.
                    </SlideDescription>
                  </Fade>
                </SlideImgDes>
              </DisneySlide>

              <UberEatsSlide>
                <UberHeading>
                  <h1>UberEats Clone</h1>
                </UberHeading>
                <UberSlideImgDes>
                  <SlideUberImage>
                    <video autoPlay loop playsInLine muted>
                      <source src="/videos/ubereats_vid.mp4" type="video/mp4" />
                    </video>
                    <UberFadedBox>
                      <a
                        href="https://expo.dev/@portfolios/rabin-ubereats-clone"
                        target="_blank"
                      >
                        <div className="boxSides">
                          View Project
                          <VisibilityIcon />
                        </div>
                      </a>
                      <div className="hrLine"></div>
                      <a
                        href="https://github.com/rabin-n14/ubereats-clone"
                        target="_blank"
                      >
                        <div className="boxSides">
                          Source Code
                          <GitHubIcon />
                        </div>
                      </a>
                    </UberFadedBox>
                  </SlideUberImage>
                  <Fade bottom duration={3000}>
                    <UberDescription>
                      <CodeIcon fontSize="small" />
                      &nbsp;Built with React-Native, ReduxJS, Firebase &
                      YelpAPI.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Google Location API.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Returns all restaurants over USA.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Runs Dynamically.
                      <br />
                      <CodeIcon fontSize="small" />
                      &nbsp;Note: Hover the Preview.
                    </UberDescription>
                  </Fade>
                </UberSlideImgDes>
              </UberEatsSlide>
            </Carousel>
          </ProjectsFlex>
        </Container>
      </AnimatedPage>
    </>
  );
}

export default Project;

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

const ProjectsFlex = styled.div`
  /* background-color: chocolate; */
  width: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Carousel = styled(Slider)``;

const TeslaSlide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const DisneySlide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const UberEatsSlide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SlideHeading = styled.div`
  /* background-color: yellow; */
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 425px) {
    margin-bottom: 20px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    margin-bottom: 5px;
    font-size: 13px;
  }
  padding: 5px;
  font-family: "Cinzel", serif;
`;

const UberHeading = styled.div`
  /* background-color: yellow; */
  text-align: center;

  @media (max-width: 375px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 13px;
  }
  padding: 5px;
  font-family: "Cinzel", serif;
`;

const SlideImgDes = styled.div`
  /* background-color: green; */
  padding-bottom: 60px;
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
  @media (max-width: 460px) {
    padding-bottom: 50px;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  @media (max-width: 820px) {
    height: 50vh;
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media (max-width: 550px) {
    height: 40vh;
  }
  @media (max-width: 425px) {
    height: 50vh;
  }
  align-items: center;
  justify-content: space-around;
`;

const UberSlideImgDes = styled.div`
  /* background-color: green; */

  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (max-width: 578px) {
    height: 50vh;
    flex-direction: column;
  }

  @media (max-width: 424px) {
    height: 50vh;
  }
  align-items: center;
`;

const SlideImage = styled.div`
  /* height: 40vh; */
  /* background-color: red; */
  position: relative;
  display: inline-block;
  width: 40%;
  @media (max-width: 820px) {
    width: 60%;
  }

  @media (max-width: 425px) {
    width: 70%;
  }
  @media (max-width: 320px) {
    width: 80%;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 1;
    transition-duration: 0.5s;
  }
`;

const SlideUberImage = styled.div`
  height: 65vh;
  /* background-color: red; */
  position: relative;
  display: inline-block;
  width: 16%;
  @media (max-width: 910px) {
    height: 70vh;
    width: 20%;
  }
  @media (max-width: 820px) {
    height: 60vh;
  }
  @media (max-width: 578px) {
    height: 40vh;
  }
  @media (max-width: 550px) {
    height: 30vh;
  }
  @media (max-width: 320px) {
    height: 40vh;
  }

  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
    opacity: 1;
    transition-duration: 0.5s;
  }
`;

const FadedBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0; /*change*/
  transition-duration: 0.5s;
  &:hover {
    opacity: 1;
    transition-duration: 0.5s;
    box-shadow: 0px 5px 21px 1px rgba(119, 119, 119, 0.88);
    .vrLine {
      opacity: 1;
      transition-duration: 0.6s;
      transform: translateY(0);
      height: 95%;
    }
    .boxSides {
      opacity: 1;
      transition-duration: 0.5s;
      transform: translateY(0);
    }
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .vrLine {
    border: 1px solid #fff;
    height: 5%;
    position: absolute;
    left: 50%;
    margin-left: 4px;
    top: 5px;
    transform: translateY(-5px);
    opacity: 0.2;
    transition: 0.25s;
  }
  .boxSides {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(80px);
    opacity: 0.2;
    transition-duration: 0.25s;
    font-family: "Shalimar", cursive;
    font-size: 30px;
    @media (max-width: 768px) {
      font-size: 25px;
    }
    @media (max-width: 620px) {
      font-size: 21px;
    }
    @media (max-width: 460px) {
      font-size: 18px;
    }
    @media (max-width: 425px) {
      font-size: 20px;
    }
    @media (max-width: 320px) {
      font-size: 18px;
    }
    &:hover {
      transition-duration: 0.25s;
      transform: scale(1.25);
      cursor: pointer;
    }
  }
  a:link {
    color: #fff;
  }
  a:visited {
    color: #fff;
  }
`;

const UberFadedBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  opacity: 0; /*change*/
  transition-duration: 0.5s;
  &:hover {
    opacity: 1;
    transition-duration: 0.5s;
    box-shadow: 0px 5px 21px 1px rgba(119, 119, 119, 0.88);
    .hrLine {
      opacity: 1;
      transition-duration: 0.6s;
      transform: translateX(0);
      width: 95%;
    }
    .boxSides {
      opacity: 1;
      transition-duration: 0.5s;
      transform: translateY(0);
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  .hrLine {
    border: 1px solid #fff;
    width: 5%;
    position: absolute;
    top: 50%;

    left: 5px;
    transform: translateX(-5px);
    opacity: 0.2;
    transition: 0.25s;
  }
  .boxSides {
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateY(80px);
    opacity: 0.2;
    transition-duration: 0.25s;
    font-family: "Shalimar", cursive;
    font-size: 30px;
    @media (max-width: 768px) {
      font-size: 25px;
    }
    @media (max-width: 620px) {
      font-size: 21px;
    }
    @media (max-width: 460px) {
      font-size: 18px;
    }
    @media (max-width: 425px) {
      font-size: 20px;
    }
    @media (max-width: 320px) {
      font-size: 18px;
    }
    &:hover {
      transition-duration: 0.25s;
      transform: scale(1.25);
      cursor: pointer;
    }
  }
  a:link {
    color: #fff;
  }
  a:visited {
    color: #fff;
  }
`;

const SlideDescription = styled.div`
  /* background-color: orange; */
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 25px;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 620px) {
    font-size: 17px;
  }
  @media (max-width: 589px) {
    font-size: 15px;
  }
  @media (max-width: 425px) {
    font-size: 18px;
  }
  @media (max-width: 375px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 13px;
  }
`;

const UberDescription = styled.div`
  /* background-color: orange; */
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 25px;
  letter-spacing: 2px;
  @media (max-width: 910px) {
    font-size: 20px;
  }
  @media (max-width: 820px) {
    font-size: 17px;
  }
  @media (max-width: 605px) {
    font-size: 12px;
  }
  @media (max-width: 678px) {
    font-size: 17px;
  }
  @media (max-width: 462px) {
    font-size: 15px;
  }
  @media (max-width: 424px) {
    font-size: 14px;
  }
  @media (max-width: 475px) {
    font-size: 12px;
  }
  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
