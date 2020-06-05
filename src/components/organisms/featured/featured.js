import React from 'react';

import { Banner } from '../../molecules/banner';
import { Header } from '../../molecules/header';
import { Hero } from '../../molecules/hero';
import CarImageLink from '../../../../assets/car.jpg';

import { StyledImg, StyledDiv } from './featured.styled';

export const Featured = () => (
  <StyledDiv>
    <Banner />
    <Header />
    <Hero />
    <StyledImg src={CarImageLink} />
  </StyledDiv>
);
