import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <>
      <Container>Rights Reserved • Rabin Sunar • 2021 •</Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  font-family: "News Cycle", sans-serif;
  text-align: center;
  font-size: 12px;
  @media (max-width: 319px) {
    font-size: 10px;
  }
  @media (max-width: 270px) {
    font-size: 8px;
  }
  letter-spacing: 3px;
`;
