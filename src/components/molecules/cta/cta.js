import React from 'react';
import { Button } from '../../atoms/button';
import { StyledSection, StyledH2, StyledP } from './cta.styled';

export const Cta = () => (
  <StyledSection>
    <header>
      <StyledH2>Hungry for more?</StyledH2>
    </header>
    <article>
      <StyledP>Read more of out old posts</StyledP>
    </article>
    <footer>
      <Button varient="secondary">View our Blog</Button>
    </footer>
  </StyledSection>
);
