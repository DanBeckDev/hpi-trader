import React from 'react';
import { Sectionx } from '../../organisms/sectionx';
import { News } from '../../organisms/news';
import { Partners } from '../../molecules/partners';
import { Services } from '../../molecules/services';
import { StyledDiv } from './home.styled';

export const Home = () => (
  <StyledDiv>
    <Sectionx />
    <Partners />
    <Services />
    <News />
  </StyledDiv>
);
