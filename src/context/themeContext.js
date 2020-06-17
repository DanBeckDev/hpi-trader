import React, { useState, createContext } from 'react';

import { defaultTheme, darkTheme } from '../utils';

export const ThemeContext = createContext(defaultTheme);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(0);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
