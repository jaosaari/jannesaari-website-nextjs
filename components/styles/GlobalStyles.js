import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  ${
    '' /* @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  } */
  }
  :root {
      //*Colors */
    --jaguar-grey: #272734;
    --sandwisp-yellow: #D9D18B;
    --chrome-white: #C7C4B9;
    --storm-dust: #686760;
    --white: #ededed;
    //*  Delet */
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(---lightGrey);
    --offWhite: #ededed;
    //*MaxWidth */
    --maxWidth: 1000px;
    //*Shadows */
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    //*Viewport Widths */
    --mobile: 768px;
    --tablet: 769px;
    --desktop: 1024px;
    --widescreen: 1216px;
    --fullhd: 1408px;
    //*Margin */
    --margin: 4rem;
    //*Grid Gap */
    --row-gap: 4rem;
    ${'' /* box-sizing: border-box; */}
    ${'' /* font-size: 10px; */}
  }
  html {
    font-size: 10px;
  }
  body {
    background: var(--jaguar-grey);
    font-size: 2rem;
  }
  //*Scrollbar */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }
`;

export default GlobalStyles;
