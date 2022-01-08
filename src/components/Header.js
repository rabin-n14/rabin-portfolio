import React from "react";
import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Nav>
        <NavMenu>
          <li className="menuList">
            <NavLink to="/" className="menuLink">
              <span className="icon">
                <HomeOutlinedIcon fontSize="large" />
              </span>
              <span className="text">HOME</span>
            </NavLink>
          </li>
          <li className="menuList">
            <NavLink to="/project" className="menuLink">
              <span className="icon">
                <IntegrationInstructionsOutlinedIcon fontSize="large" />
              </span>
              <span className="text">PROJECTS</span>
            </NavLink>
          </li>
          <li className="menuList">
            <NavLink to="/experience" className="menuLink">
              <span className="icon">
                <PsychologyOutlinedIcon fontSize="large" />
              </span>
              <span className="text">EXPERIENCE</span>
            </NavLink>
          </li>
          <li className="menuList">
            <NavLink to="/contact" className="menuLink">
              <span className="icon">
                <CallOutlinedIcon fontSize="large" />
              </span>
              <span className="text">CONTACT</span>
            </NavLink>
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

  @media (max-width: 695px) {
    width: 65%;
  }
  @media (max-width: 634px) {
    width: 67%;
  }
  @media (max-width: 605px) {
    width: 68%;
  }
  @media (max-width: 574px) {
    width: 70%;
  }
  @media (max-width: 532px) {
    width: 73%;
  }
  @media (max-width: 500px) {
    width: 75%;
  }
  @media (max-width: 786px) {
    width: 78%;
  }
  @media (max-width: 465px) {
    width: 80%;
  }
  @media (max-width: 438px) {
    width: 85%;
  }
  @media (max-width: 411px) {
    width: 87%;
  }
  @media (max-width: 401px) {
    width: 90%;
  }
  @media (max-width: 390px) {
    width: 95%;
  }
  @media (max-width: 367px) {
    width: 98%;
    overflow-x: hidden;
  }
  justify-content: space-around;
  position: relative;
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
        @media (max-width: 633px) {
          font-size: 17px;
        }
        @media (max-width: 603px) {
          font-size: 16px;
        }
        @media (max-width: 514px) {
          font-size: 15px;
        }
        @media (max-width: 469px) {
          font-size: 14px;
        }
        @media (max-width: 280px) {
          font-size: 11px;
        }

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
