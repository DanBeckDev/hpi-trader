import React from 'react';
import { Home } from '../components/templates/home';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../utils';

export default () => (
  <>
    <ThemeProvider theme={defaultTheme}>
      <Home />
    </ThemeProvider>
    <GlobalStyle />
  </>
);
