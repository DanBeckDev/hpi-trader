import { createGlobalStyle } from 'styled-components';
import { primaryFont, typeScale, defaultTheme } from './';

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  font-family: ${primaryFont};
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5 {
  font-weight: normal;
}

h1 {
  font-size: ${typeScale.header1};
}

h2 {
  font-size: ${typeScale.header2};
}

h3 {
  font-size: ${typeScale.header3};
}

h4 {
  font-size: ${typeScale.header4};
}

h5 {
  font-size: ${typeScale.header4};
}

p {
  font-size: ${typeScale.paragraph};
  color: ${defaultTheme.pColor};
}
`;
