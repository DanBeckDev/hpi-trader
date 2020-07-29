import React from 'react';
import { Blogcta } from '../../molecules/blogcta';
import { Cta } from '../../molecules/cta';
import {
  StyledArticle,
  StyledDiv,
  StyledH1,
  StyledP,
  StyledImg,
} from './news.styled';
import patternImgPath from '../../../static/pattern.svg';

export const News = () => (
  <>
    <StyledImg src={patternImgPath} />
    <StyledDiv>
      <section>
        <header>
          <StyledH1>Latest News</StyledH1>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing coondasjnkd
          </StyledP>
        </header>
        <StyledArticle>
          <Cta />
          <Blogcta />
        </StyledArticle>
      </section>
    </StyledDiv>
  </>
);
