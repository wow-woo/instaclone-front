import React from "react";
import { setLogin, setMode } from "../apolloClient";
import styled, { StyledComponent } from "styled-components";
import { useState } from "react";
import { useReactiveVar } from "@apollo/client";

interface TitleProps {
  colorMode: boolean;
}
const Title = styled.h1<TitleProps>`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => (props.colorMode ? "red" : "blue")};
`;

const ContainerDiv = styled.div``;

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const currentMode = useReactiveVar(setMode);

  return (
    <ContainerDiv>
      <header>
        <Title colorMode={currentMode}>Log in</Title>
        <button onClick={() => setLogin(true)}>sign in</button>
        <button onClick={() => setMode(!currentMode)}>color mode</button>
      </header>
    </ContainerDiv>
  );
};
