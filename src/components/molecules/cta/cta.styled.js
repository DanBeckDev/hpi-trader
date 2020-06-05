import styled from 'styled-components';
import { neutral } from '../../../utils/colors';

export const StyledSection = styled.section`
  text-align: center;
  width: 43.2rem;
  height: 35.8rem;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  padding-top: 7.6rem;
  padding-bottom: 6.856rem;
  background-color: ${neutral[400]};
`;

export const StyledH2 = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  color: ${neutral[100]};
`;

export const StyledP = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 3rem;
  color: ${neutral[100]};
`;
