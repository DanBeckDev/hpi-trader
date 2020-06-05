import React from 'react';
import CarIconPath from '../../../../assets/icon.svg';
import { StyledH1, StyledImg } from './logo.styled';

export const Logo = () => (
  <>
    <StyledH1>
      HPI
      <StyledImg src={CarIconPath} />
      Trader
    </StyledH1>
  </>
);
