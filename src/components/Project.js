import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CodeIcon from "@mui/icons-material/Code";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";
import Fade from "react-reveal/Fade";

function Project() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: true,
  };

  return (
    <>
      <Container>
        <ProjectsFlex>
          <Carousel {...settings}>
            <TeslaSlide>
              <SlideHeading>
                <h1>Tesla Clone</h1>
              </SlideHeading>
              <SlideImgDes>
                <SlideImage>
                  <img src="/images/tesla-clone.png" alt="Tesla-Clone-Img" />
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
                    &nbsp;Made with ReactJS & ReduxJS.
                    <br />
                    <CodeIcon fontSize="small" />
                    &nbsp;Responsive.
                    <br />
                    <CodeIcon fontSize="small" />
                    &nbsp;Menu Button is clickable.
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
                  <img src="/images/disney-clone.png" alt="Disney-Clone-Img" />
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
                    &nbsp;Made with ReactJS, ReduxJS & Firebase.
                    <br />
                    <CodeIcon fontSize="small" />
                    &nbsp;Responsive.
                    <br />
                    <CodeIcon fontSize="small" />
                    &nbsp;Requires login with Gmail.
                    <br />
                    <CodeIcon fontSize="small" />
                    &nbsp;Each Movies are clickable.
                    <br />
                    <CodeIcon fontSize="small" />
                    &nbsp;Don't forget to SignOut.
                  </SlideDescription>
                </Fade>
              </SlideImgDes>
            </DisneySlide>
          </Carousel>
        </ProjectsFlex>
      </Container>
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

const SlideHeading = styled.div`
  /* background-color: yellow; */
  text-align: center;
  margin-bottom: 10px;
  padding: 5px;
  font-family: "Cinzel", serif;
`;

const SlideImgDes = styled.div`
  /* background-color: green; */
  padding-bottom: 60px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const SlideImage = styled.div`
  height: 40vh;
  /* background-color: red; */
  position: relative;
  display: inline-block;

  img {
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
      transition-duration: 0.5s;
      transform: translateY(0);
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
    height: 95%;
    position: absolute;
    left: 50%;
    margin-left: 4px;
    top: 5px;
    transform: translateY(-60px);
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
    &:hover {
      transition-duration: 0.25s;
      font-size: 40px;
      cursor: pointer;
    }
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
`;
