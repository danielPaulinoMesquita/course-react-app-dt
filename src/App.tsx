import React from 'react';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 64px;
  color: darkorchid;
  p {
    font-size: 12px;
    color: aqua;
  }
`

export function App() {
  return (
    <Title>
       Hello world <p>TESTANDO DENTRO DO STYLED</p>
    </Title>
  );
}

