import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../utils';

export default () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <h1>Buying Page</h1>
    </ThemeProvider>
    <GlobalStyle />
  </>
);
