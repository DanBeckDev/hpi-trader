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
import { Button } from '../../atoms/button';
import PhoneImagePath from '../../../../assets/phone.jpg';
import DeskImagePath from '../../../../assets/desk.jpg';
import LaptopImagePath from '../../../../assets/laptop.jpg';

export const Services = () => (
  <StyledSection>
    <StyledArticle>
      <header>
        <StyledH1>About Us</StyledH1>
        <StyledH2>
          Founded in 2020. <br />
          The concept of Car Tree was <br /> born from a real world situation...
        </StyledH2>
      </header>
      <article>
        <StyledP>
          A family member was stuck in a car finance that they no longer wanted
          to be in. We couldn't afford to buy a car but needed one. We took over
          the car finance with 18 months left of payments. We then owned the car
          outright. They moved out of a financial responsibility and we aquired
          a car at a discounted cost compared to retail.
        </StyledP>
      </article>
      <footer>
        <Button varient="primary">View our services</Button>
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
