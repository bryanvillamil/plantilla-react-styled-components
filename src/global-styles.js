import { createGlobalStyle } from 'styled-components';

// import ba from './assets/fonts/Bariol-Regular/Bariol-Regular.ttf'

const GlobalStyle = createGlobalStyle`

  ${'' /* @font-face {
    font-family: 'bariol regular';
    src: url('${ba}') format('truetype');
  } */}

  html {
    /* font-size: 10px;
    @media(max-width: 551px) {
      font-size: 55%;
    }
    @media(max-width: 768px) {
      font-size: 52%;
    } */
  }

  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: 'bariol regular'
  }
`

export default GlobalStyle;