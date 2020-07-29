import React from 'react';
import { StyledDiv, StyledP } from './banner.styled';

export const Banner = () => (
  <StyledDiv>
    <StyledP>
      Full website coming soon! Watch this space{' '}
      <span role="img" aria-label="Fire emoji">
        🔥
      </span>
    </StyledP>
  </StyledDiv>
);
