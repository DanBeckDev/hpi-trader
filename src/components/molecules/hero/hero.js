import React from 'react';
import { Button } from '../../atoms/button';
import {
  StyledH1,
  StyledSpan,
  StyledSection,
  StyledP,
  StyledMargins,
} from './hero.styled';

export const Hero = () => (
  <StyledSection>
    <StyledMargins as="header">
      <StyledH1>
        Car Tree <StyledSpan>UK</StyledSpan>
      </StyledH1>
    </StyledMargins>
    <StyledMargins as="article">
      <StyledP>
        The car market place specializing in finance
        <br />
        Taking the power away from the dealer, saving you money
      </StyledP>
    </StyledMargins>
    <StyledMargins as="footer">
      <a href="/buy">
        <Button varient={'primary'}>
          Buy{' '}
          <span role="img" aria-label="car emoji">
            🚗
          </span>
        </Button>
      </a>
      <Button varient={'tertiary'}>
        Sell{' '}
        <span role="img" aria-label="car emoji">
          🚙
        </span>
      </Button>
    </StyledMargins>
  </StyledSection>
);
