import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components/native";
import reset from "styled-reset";

export const lightMode: DefaultTheme = {
  fontColor: "#2c2c",
  bgColor: "lightgray",
  secondaryColor: "#b2dffc",
  primaryColor: "#0095F6",
  errColor: "orange",
};

export const darkMode: DefaultTheme = {
  fontColor: "lightgray",
  bgColor: "#2c2c",
  secondaryColor: "#b2dffc",
  primaryColor: "#0095F6",
  errColor: "orange",
};

export const GlobalStyles = createGlobalStyle`
${reset}

*{
  box-sizing:border-box;
  font-family: "Segoe UI, Roboto";
  /* font-family: 'Lucida sans, helvetica, sans-serif'; */
}

body{
  /* background-color:${(props) => props.theme.bgColor}; */
}

a{
  text-decoration:none;
}
`;
