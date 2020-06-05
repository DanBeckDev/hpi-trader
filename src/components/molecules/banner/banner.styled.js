import styled from 'styled-components';
import { defaultTheme } from '../../../utils';

export const StyledDiv = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${defaultTheme.bannerColor};
`;

export const StyledP = styled.p`
  color: ${defaultTheme.textColorInverted};
  font-weight: bold;
`;
