import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --dark-blue: #023047;
  --yellow:#f5a53d;
  --light-blue:#8ECAE6;
  --white-blue: #d9edf7;
}
html {
  box-sizing: border-box;
  height:100%;
}
*, *:before, *:after {
  box-sizing: inherit;
}
html,body{
  position: relative;
  overflow-x: hidden;
  overflow-y: visible;
  max-height:100%;
}
 ul{
   margin:0;
   padding:0;
   list-style: none;
 }
section {
  padding: 4.5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}
 #mobile-menu{
  position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    width: 300px
 }
 #project-modal{
  position: absolute;
    top: 0;
    left: 0;
    top: 0;
 bottom: 0;
 }
 .fixed{
   overflow: hidden;
   height: 100vh;
   margin-right:20px;
  
 }
`;

export default GlobalStyles;
