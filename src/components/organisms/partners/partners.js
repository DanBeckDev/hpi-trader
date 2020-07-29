import React from 'react';
import {
  StyledH1,
  StyledImg,
  StyledArticle,
  StyledHr,
  StyledSection,
} from './partners.styled';
import PlaceholderImagePath from '../../../static/placeholder.png';

export const Partners = () => (
  <StyledSection>
    <header>
      <StyledH1>We have the pleasure of partnering with</StyledH1>
    </header>
    <StyledArticle>
      <StyledImg src={PlaceholderImagePath} />
      <StyledImg src={PlaceholderImagePath} />
      <StyledImg src={PlaceholderImagePath} />
      <StyledImg src={PlaceholderImagePath} />
      <StyledImg src={PlaceholderImagePath} />
    </StyledArticle>
    <StyledHr />
  </StyledSection>
);
