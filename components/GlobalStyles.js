import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.bgSecondary};
    transition: all .2s ease;
    transition-property: color, background-color;
  }

  a {
    color: inherit;
    text-decoration: none;
  }


`;

export default globalStyle;
