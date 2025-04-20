
import { createGlobalStyle } from 'styled-components';
import { colors, fonts } from './constants-styles';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: ${fonts.primary};
    background-color: ${colors.background};
    color: ${colors.textPrimary};
    margin: 0;
    padding: 0;
    background-image: url('/images/subtle-texture.png');
    background-repeat: repeat;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${fonts.serif};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyles;
