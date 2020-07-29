import React from 'react';

import { Hero } from '../../molecules/hero';

import CarImageLink from '../../../static/car.jpg';

import { StyledImg, StyledDiv } from './featured.styled';

export const Featured = () => (
  <StyledDiv>
    <Hero />
    <StyledImg src={CarImageLink} />
  </StyledDiv>
);
