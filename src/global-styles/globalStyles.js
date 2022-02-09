import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background: #000;
    color: #fff;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

