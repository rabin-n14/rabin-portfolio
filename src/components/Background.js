import React from "react";
import styled from "styled-components";

function Background() {
  return (
    <>
      <BG>
        <Container />
      </BG>
    </>
  );
}

export default Background;

const BG = styled.div`
  height: 100vh;
  z-index: -1;
`;

const Container = styled.div`
  background: linear-gradient(
    163deg,
    rgba(0, 0, 0, 1) 2%,
    rgba(0, 110, 145, 1) 20%,
    rgba(0, 58, 71, 0.9612219887955182) 30%,
    rgba(0, 87, 115, 1) 40%,
    rgba(0, 32, 42, 1) 50%,
    rgba(0, 70, 90, 1) 60%,
    rgba(0, 58, 71, 0.958420868347339) 70%,
    rgba(0, 110, 145, 1) 80%,
    rgba(0, 0, 0, 1) 98%
  );
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
