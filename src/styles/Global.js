import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    // colors
    --color-primary: #ff7600;
    --color-primary-dark: #e06600;
    --bg-color-primary: #0d1b2a;
    --bg-color-secondary: #1b263b;
    --border-color: #464c53;
    --text-color-primary: #e0e0e0;
    --text-color-secondary: #a0a0a0;
    --gradient: linear-gradient(
	    90deg,
	    rgba(13, 27, 42, 1) 0%,
	    rgba(33, 44, 56, 1) 35%,
	    rgba(7, 21, 36, 1) 100%
    );

    // text-related
    --font : "Roboto", serif;
    --font-size-base: 1.8rem;
    --line-height-base: 1.8;
    --font-weight-normal: 400;
    --font-weight-semibold: 500;
    --font-weight-bold: 700;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: var(--font);
	  font-size: var(--font-size-base);
    font-weight: var(--font-weight-normal);
	  line-height: var(--line-height-base);
	  background-image: var(--gradient);
	  color: var(--text-color-primary);
	  padding: 2rem;
	  scrollbar-width: none;
  }
`;

export default GlobalStyles;
