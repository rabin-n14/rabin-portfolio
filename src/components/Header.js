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
                <HomeOutlinedIcon />
              </span>
              <span className="text">Home</span>
            </a>
          </li>
          <li className="menuList">
            <a href="#">
              <span className="icon">
                <IntegrationInstructionsOutlinedIcon />
              </span>
              <span className="text">Projects</span>
            </a>
          </li>
          <li className="menuList">
            <a href="#">
              <span className="icon">
                <PsychologyOutlinedIcon />
              </span>
              <span className="text">Experience</span>
            </a>
          </li>
          <li className="menuList">
            <a href="#">
              <span className="icon">
                <CallOutlinedIcon />
              </span>
              <span className="text">Contact</span>
            </a>
          </li>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Header;

const Nav = styled.div`
  min-height: 10vh;
  /* background-color: black; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-evenly;
  position: relative;

  li {
    list-style: none;
    display: flex;
    position: relative;
    z-index: 1;
    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
    a:link {
      text-decoration: none;
    }
    a:visited {
      text-decoration: none;
    }
  }
`;
