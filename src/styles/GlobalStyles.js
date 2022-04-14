import { createGlobalStyle } from 'styled-components';
import "@fontsource/poppins";
import themeContext from '../context/themeContext';
import themeList from '../data/themeList';


const GlobalStyles = createGlobalStyle`
:root {
  --darkBlue_1: #3b447a;
  --darkBlue_2: #222b5f;
  --darkBlue_3: #0A0F19;
  --mediumSlateBlue: #6c62e2;
  --lightBlue_1: #f3f1fe;
  --lightBlue_2: #adbde3;
  --white: #ffffff;
  --black: #000000;
  --toggleButtonCOlor: #cfc8f4;
  --header-height: 50px;
}

html {
  font-size: 10px;
}

body {
  background-color: ${(props) => 
    props.mode === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_3)'
  };
  font-family: 'Poppins', sans-serif;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}

img, svg {
  width: 100%;
  height: 100%;
}
input,
textarea {
  outline: none;
}
`

GlobalStyles.contextType = themeContext;

export default GlobalStyles;