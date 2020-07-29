import React from 'react';

import {
  StyledH1,
  StyledH2,
  StyledP,
  StyledArticle,
  StyledPhoneImg,
  StyledDeskImg,
  StyledLaptopImg,
  StyledSection,
  StyledDiv,
} from './services.styled';
import data from './services.data';

import { Button } from '../../atoms/button';
import PhoneImagePath from '../../../static/phone.jpg';
import DeskImagePath from '../../../static/desk.jpg';
import LaptopImagePath from '../../../static/laptop.jpg';

export const Services = () => (
  <StyledSection>
    <StyledArticle>
      <header>
        <StyledH1>{data.heading}</StyledH1>
        <StyledH2 dangerouslySetInnerHTML={{ __html: data.subHeading }} />
      </header>
      <article>
        <StyledP dangerouslySetInnerHTML={{ __html: data.article }} />
      </article>
      <footer>
        <Button varient="primary">{data.button}</Button>
      </footer>
    </StyledArticle>
    <aside>
      <StyledDiv>
        <StyledPhoneImg src={PhoneImagePath} />
        <StyledDeskImg src={DeskImagePath} />
        <StyledLaptopImg src={LaptopImagePath} />
      </StyledDiv>
    </aside>
  </StyledSection>
);
