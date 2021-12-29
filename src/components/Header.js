import React from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Nav>
        <NavMenu>
          <li className="menuList">
            <Link to="/" className="menuLink">
              <span className="icon">
                <HomeOutlinedIcon fontSize="large" />
              </span>
              <span className="text">HOME</span>
            </Link>
          </li>
          <li className="menuList">
            <Link to="/project" className="menuLink">
              <span className="icon">
                <IntegrationInstructionsOutlinedIcon fontSize="large" />
              </span>
              <span className="text">PROJECTS</span>
            </Link>
          </li>
          <li className="menuList">
            <Link to="/experience" className="menuLink">
              <span className="icon">
                <PsychologyOutlinedIcon fontSize="large" />
              </span>
              <span className="text">EXPERIENCE</span>
            </Link>
          </li>
          <li className="menuList">
            <Link to="/contact" className="menuLink">
              <span className="icon">
                <CallOutlinedIcon fontSize="large" />
              </span>
              <span className="text">CONTACT</span>
            </Link>
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
  overflow-y: hidden;
  li {
    list-style: none;
    display: flex;
    position: relative;
    z-index: 1;
    :hover .menuLink .icon {
      transform: translateY(-50px);
    }
    :hover .menuLink .text {
      transform: translateY(8px);
      opacity: 1;
    }
    :hover .menuLink .text:after {
      transform: scaleX(1);
      opacity: 1;
    }

    .menuLink {
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
        &:after {
          content: "";
          height: 2px;
          background: white;
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          transform: scaleX(0);
        }
      }
    }
  }
`;
