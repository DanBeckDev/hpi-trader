import styled, { css } from 'styled-components';
import { typeScale, neutral } from '../../../utils';

const sharedStyles = css`
  font-weight: bold;
`;

export const StyledH1 = styled.h1`
  width: 40.9rem;
  margin-top: 20.6rem;
  margin-bottom: 0;
  font-size: 5.2rem;
  ${sharedStyles}
`;

export const StyledH2 = styled.h2`
  width: 43.9rem;
  margin-top: 0;
  margin-bottom: 4.3rem;
  font-size: ${typeScale.header1};
  ${sharedStyles}
`;

export const StyledP = styled.p`
  width: 43.9rem;
  margin-top: 2.7rem;
  font-size: ${typeScale.header2};
`;

export const StyledArticle = styled.article`
  max-width: 40.9rem;
`;

export const StyledSection = styled.section`
  display: flex;
  flex-flow: row nowrap;
  padding-left: 16.9rem;
  background-color: ${neutral[100]};
`;

export const StyledPhoneImg = styled.img`
  width: 52rem;
  border-radius: 12px;
  margin-left: 18.1rem;
  margin-top: 20.6rem;
`;
export const StyledDeskImg = styled.img`
  width: 30.8rem;
  border-radius: 12px;
  margin-left: 6.8rem;
  margin-top: 6.5rem;
  margin-bottom: 8.6rem;
`;
export const StyledLaptopImg = styled.img`
  width: 25.6rem;
  border-radius: 12px;
  margin-left: 6.9rem;
  margin-top: 6.5rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
`;
