import { createGlobalStyle } from "styled-components";
import Black from "../fonts/Roboto-Black.ttf";
import Bold from "../fonts/Roboto-Bold.ttf";
import Light from "../fonts/Roboto-Light.ttf";
import Medium from "../fonts/Roboto-Medium.ttf";
import Regular from "../fonts/Roboto-Regular.ttf";
import Thin from "../fonts/Roboto-Thin.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Roboto";
    src: url(${Regular}) format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${Black}) format("truetype");
    font-weight: 900;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${Bold}) format("truetype");
    font-weight: 700;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${Light}) format("truetype");
    font-weight: 300;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${Medium}) format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "Roboto";
    src: url(${Thin}) format("truetype");
    font-weight: 100;
  }
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Roboto", Lato, "Lucida Grande", Tahoma, Sans-Serif;
}

html {
  scroll-behavior: smooth;
}
  
  body {
  background-color: ${({ theme }) => theme.main};
  overflow-x: hidden;
  
}

::-webkit-scrollbar {
  width: 6px;
  
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.main};
  width: 10px;
  padding: 5px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.4);
  box-shadow: inset 0 0 6px rgba(0,0,0,0.4);
  
}

::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.gray};
  border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.red}
}
`;
