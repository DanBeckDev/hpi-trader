import React from 'react';
import profileSvgPath from '../../../../assets/profile.svg';
import {
  StyledSection,
  StyledH2,
  StyledP,
  StyledButton,
  StyledFooter,
  StyledDiv,
  Styledp,
} from './blogcta.styled';

export const Blogcta = () => (
  <StyledSection>
    <header>
      <StyledP>Hungry for more?</StyledP>
    </header>
    <article>
      <StyledH2>Read more of out old posts</StyledH2>
    </article>
    <StyledFooter>
      <StyledDiv>
        <img src={profileSvgPath} />
        <Styledp>
          <b>Joe Bloggs</b>
        </Styledp>
        <Styledp>15/05/2020</Styledp>
      </StyledDiv>
      <StyledButton>-></StyledButton>
    </StyledFooter>
  </StyledSection>
);
