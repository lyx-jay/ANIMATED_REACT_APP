import { createGlobalStyle } from 'styled-components';
import "@fontsource/poppins";

const GlobalStyles = createGlobalStyle`
:root {
  --darkBlue_1: #3b447a;
  --darkBlue_2: #222b5f;
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
  background-color: var(--lightBlue_1);
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
`

export default GlobalStyles;