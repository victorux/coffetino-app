import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fonts.ubuntu} !important;
    color: ${(props) => props.theme.colors.black};
  }

  a{
    text-decoration: none;
  }

  h1{
    font-size: ${(props) => props.theme.fontSizes._1000};
  }
`


export default GlobalStyle;