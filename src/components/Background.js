import React from "react";
import styled from "styled-components";

function Background() {
  return (
    <>
      <BG>
        <Container src="/images/bg_smoke.jpg" />
      </BG>
    </>
  );
}

export default Background;

const BG = styled.div`
  height: 100vh;
  z-index: -1;
`;

const Container = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
