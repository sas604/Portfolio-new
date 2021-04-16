import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --dark-blue: #023047;
  --yellow:#FFA530;
  --light-blue:#8ECAE6;
}
  html {
    height:100%;
    box-sizing: border-box;
  
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html,body {
    min-height: 100vh;
    overflow-x : hidden;
    position: relative;
  }
 ul{
   margin:0;
   padding:0;
   list-style: none;
 }
 #mobile-menu{
  position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    width: 300px
 }
`;

export default GlobalStyles;
