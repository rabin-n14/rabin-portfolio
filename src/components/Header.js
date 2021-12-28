import React from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

function Header() {
  return (
    <>
      <Nav>
        <NavMenu>
          <li className="menuList">
            <a href="#">
              <span className="icon">
                <HomeOutlinedIcon fontSize="large" />
              </span>
              <span className="text">HOME</span>
            </a>
          </li>
          <li className="menuList">
            <a href="#">
              <span className="icon">
                <IntegrationInstructionsOutlinedIcon fontSize="large" />
              </span>
              <span className="text">PROJECTS</span>
            </a>
          </li>
          <li className="menuList">
            <a href="#">
              <span className="icon">
                <PsychologyOutlinedIcon fontSize="large" />
              </span>
              <span className="text">EXPERIENCE</span>
            </a>
          </li>
          <li className="menuList">
            <a href="#">
              <span className="icon">
                <CallOutlinedIcon fontSize="large" />
              </span>
              <span className="text">CONTACT</span>
            </a>
          </li>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Header;

const Nav = styled.div`
  min-height: 8vh;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-around;
  position: relative;
  /* border: 2px solid rgba(0, 0, 0, 0.5); */
  border-radius: 10px;
  /* background-color: green; */
  /* overflow-y: hidden; */
  li {
    list-style: none;
    display: flex;
    position: relative;
    z-index: 1;
    :hover a .icon {
      transform: translateY(-35px);
    }
    :hover a .text {
      transform: translateY(10px);
      opacity: 1;
    }
    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      flex-direction: column;
      text-align: center;

      .icon {
        position: relative;
        display: block;
        font-size: 50px;

        line-height: 75px;
        text-align: center;
        transition: 0.5s;
      }

      .text {
        position: absolute;
        font-family: "Moon Dance", cursive;
        font-weight: bold;
        font-size: 18px;
        letter-spacing: 2px;
        transition: 0.5s;
        opacity: 0;
      }
    }
    a:link {
      text-decoration: none;
    }
    a:visited {
      text-decoration: none;
    }
  }
`;
