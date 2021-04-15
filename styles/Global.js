import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --dark-blue: #023047;
  --yellow:#FFA530;
  --light-blue:#8ECAE6;
}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,body {
    position: relative;
  }
 ul{
   margin:0;
   padding:0;
   list-style: none;
 }
 
`;

export default GlobalStyles;
