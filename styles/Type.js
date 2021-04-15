import { createGlobalStyle } from 'styled-components';

const Type = createGlobalStyle`
  body {
    font-family: century-gothic, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: var(--dark-blue);
  }

  :any-link {
    color: var(--dark-blue);
    text-decoration: none;
    :hover{
      color:#056494;
    }
  }

`;

export default Type;
