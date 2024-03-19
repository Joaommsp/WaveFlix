import { createGlobalStyle } from "styled-components";

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  
  body {
    font-family: "Kulim Park", sans-serif;
    background-color: #0D0C11;
    overflow-x: hidden;
  }
`;

export default globalStyles