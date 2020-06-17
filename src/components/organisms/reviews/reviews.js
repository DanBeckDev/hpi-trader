import React from 'react';

import { StyledH1Trustpilot, StyledImg, StyledArticle } from './reviews.styled';

import trustpilotImgPath from '../../../../assets/trustpilot.png';

export const Reviews = () => (
  <section>
    <header>
      <StyledH1Trustpilot>What people are saying about us</StyledH1Trustpilot>
    </header>
    <StyledArticle>
      <StyledImg src={trustpilotImgPath} />
    </StyledArticle>
  </section>
);
