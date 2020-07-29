import React from 'react';

import { StyledDiv } from './home.styled';
import { Header } from '../../organisms/header';
import { Featured } from '../../organisms/featured';
import { News } from '../../organisms/news';
import { Partners } from '../../organisms/partners';
import { Services } from '../../organisms/services';
import { Reviews } from '../../organisms/reviews';

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
