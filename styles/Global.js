import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
    height:100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,body {
    min-height: 100%;
    position: relative;
    overflow-x: hidden;
  }

`;

export default GlobalStyles;
