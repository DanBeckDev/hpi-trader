import React from 'react';
import { Blogcta } from '../../molecules/blogcta';
import { Cta } from '../../molecules/cta';
import {
  StyledArticle,
  StyledDiv,
  StyledH1,
  StyledP,
  StyledH1Trustpilot,
  StyledImg,
} from './news.styled';
import patternImgPath from '../../../../assets/pattern.svg';

import trustpilotImgPath from '../../../../assets/trustpilot.png';

export const News = () => (
  <>
    <div>
      <img width="100%" src={patternImgPath} />
    </div>

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
      <section>
        <header>
          <StyledH1Trustpilot>
            What people are saying about us
          </StyledH1Trustpilot>
        </header>
        <article>
          <StyledImg src={trustpilotImgPath} />
        </article>
      </section>
    </StyledDiv>
  </>
);
