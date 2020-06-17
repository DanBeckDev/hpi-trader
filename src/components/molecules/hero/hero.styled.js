import styled, { css } from 'styled-components';
import { defaultTheme, typeScale } from '../../../utils';

const centerStyle = css`
  margin-left: auto;
  margin-right: auto;
`;

export const StyledH1 = styled.h1`
  font-size: 6.4rem;
  color: ${defaultTheme.secondaryColor[100]};
  max-width: 87.8rem;
  margin: 0;
  ${centerStyle}
`;

export const StyledP = styled.p`
  max-width: 100.5rem;
  font-size: ${typeScale.header2};
  ${centerStyle};
`;

export const StyledSpan = styled.span`
  background: ${defaultTheme.primaryColor[300]};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StyledSection = styled.section`
  padding-top: 20.2rem;
  text-align: center;
`;

export const StyledMargins = styled.div`
  margin: 5.5rem 0 5.5rem 0;
`;
