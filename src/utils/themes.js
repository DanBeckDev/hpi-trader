import React, { useState } from 'react';
import { blue, neutral } from './colors';
import { ThemeProvider } from 'styled-components';

export const defaultTheme = {
  primaryColor: {
    100: blue[100],
    200: blue[200],
    300: blue[300],
    400: blue[400],
  },

  secondaryColor: {
    100: neutral[100],
    200: neutral[200],
    300: neutral[300],
    400: neutral[400],
    500: neutral[500],
  },
};

export const darkTheme = {
  primaryColor: {
    100: blue[100],
    200: blue[200],
    300: blue[300],
    400: blue[400],
  },

  secondaryColor: {
    100: neutral[100],
    200: neutral[200],
    300: neutral[300],
    400: neutral[400],
    500: neutral[500],
  },
};

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState(0);
  useEffect(() => {
    localStorage.setItem('theme', 'default');
  });
  <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
