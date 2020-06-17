import styled, { css } from 'styled-components';
import { defaultTheme, typeScale } from '../../../utils/index';

const borderStyles = css`
  border: 2px solid transparent;
`;

const buttonTypes = {
  primary: css`
    color: ${defaultTheme.secondaryColor[100]};
    background-color: ${defaultTheme.secondaryColor[400]};
    ${borderStyles}
    :hover {
      background-color: ${defaultTheme.secondaryColor[300]};
    }
  `,
  secondary: css`
    color: ${defaultTheme.secondaryColor[500]};
    background-image: ${defaultTheme.primaryColor[300]};
    ${borderStyles}
    :hover {
      background-image: ${defaultTheme.primaryColor[400]};
    }
  `,
  tertiary: css`
    color: ${defaultTheme.secondaryColor[100]};
    background-color: transparent;
    border: 1px solid ${defaultTheme.secondaryColor[400]};
    :hover {
      border: 1px solid ${defaultTheme.primaryColor[200]};
    }
  `,
};

const StyledButton = styled.button`
  height: 7.5rem;
  margin: 0 3rem 0 3rem;
  padding: 1.9rem 3.4rem;
  border-radius: 4.3rem;
  min-width: 10rem;
  cursor: pointer;
  font-size: ${typeScale.header2};
  ${borderStyles};
  ${(props) => buttonTypes[props.varient]}
`;

export default StyledButton;
