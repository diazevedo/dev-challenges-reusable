import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  html {
    height: 100%;
    font-size: 62.5%;
    border: 10px solid green;
  }
  
  body {
    padding: 0;
    margin: 0;
    background-color: #ffffff;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
