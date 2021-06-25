import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components/native";
import reset from "styled-reset";

export const lightMode: DefaultTheme = {
  fontColor: "#2c2c",
  bgColor: "lightgray",
};

export const darkMode: DefaultTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c",
};

export const GlobalStyles = createGlobalStyle`
${reset}

body{
  background-color:${(props) => props.theme.bgColor}
}
`;
