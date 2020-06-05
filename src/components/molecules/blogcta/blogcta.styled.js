import styled from 'styled-components';
import { neutral } from '../../../utils/colors';

export const StyledSection = styled.section`
  padding-left: 2.9rem;
  padding-right: 2.9rem;
  width: 65.9rem;
  height: 35.8rem;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
  padding-top: 5.3rem;
  padding-bottom: 6.856rem;
  background-color: ${neutral[400]};
`;

export const StyledH2 = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 8.1rem;
  color: ${neutral[100]};
`;

export const StyledP = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0;
  color: ${neutral[100]};
`;

export const StyledButton = styled.button`
  border: 1px solid #94979e;
  box-sizing: border-box;
  border-radius: 43px;
  width: 8rem;
  height: 8rem;
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  height: 6.2rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
`;
export const Styledp = styled.p`
  margin: 0;
  padding: 0.2rem 0;
`;
