import React from 'react';

import { StyledDiv } from './home.styled';
import { ThemeProvider } from 'styled-components';

import { ThemeContextProvider } from '../../../context/themeContext';
import { Header } from '../../organisms/header';
import { Featured } from '../../organisms/featured';
import { News } from '../../organisms/news';
import { Partners } from '../../organisms/partners';
import { Services } from '../../organisms/services';
import { Reviews } from '../../organisms/reviews';
import { defaultTheme, darkTheme } from '../../../utils';

const invertTheme = () => {
  let theme = defaultTheme;
  return () => (theme === defaultTheme ? defaultTheme : darkTheme);
};

export const Home = () => (
  <StyledDiv>
    <Header />
    <Featured />
    <Partners />
    <Services />
    <News />
    <Reviews />
  </StyledDiv>
);
