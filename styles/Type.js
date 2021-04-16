import styled, { createGlobalStyle } from 'styled-components';

const Type = createGlobalStyle`
  body {
    font-family: century-gothic, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--dark-blue);
  }

  a {
    color: var(--dark-blue);
    text-decoration: none;
    :hover{
      color:#056494;
    }
  }
  :is(h1,h2,h3,h4,h5,h6){
  margin:0;
  font-weight: 700;
  font-style: normal;
  line-height: 1;
 
}
p{
  margin: 0;
  margin-top: 1.5rem;
  line-height: 1.5;
  max-width: 50ch;
}
`;
export const H1highlight = styled.h1`
  font-size: clamp(1.7rem, 7vw, 2.8rem);
  position: relative;
  white-space: nowrap;
  display: inline-block;
  max-width: 100%;

  ::before {
    content: '';
    height: 50%;
    width: calc(100% + 10px);
    background-color: var(--yellow);
    bottom: 0;
    left: --10px;
    position: absolute;
    z-index: -1;
  }
`;
export default Type;
