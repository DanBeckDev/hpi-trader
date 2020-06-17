import styled from 'styled-components';
import { neutral } from '../../../utils';

export const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
`;

export const StyledDiv = styled.div`
  padding-left: 17rem;
  padding-right: 13rem;
  background-color: ${neutral[200]};
`;

export const StyledH1 = styled.h1`
  margin: 0;
  font-size: 5.2rem;
  font-weight: bold;
`;

export const StyledP = styled.p`
  margin-top: 4.1rem;
  margin-bottom: 11.6rem;
  width: 52.2rem;
  font-size: 2.8rem;
  font-weight: bold;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
`;
