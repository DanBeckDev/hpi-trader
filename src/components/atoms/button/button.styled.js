import styled, { css } from 'styled-components';
import { defaultTheme, typeScale } from '../../../utils/index';

const borderStyles = css`
  border: 2px solid transparent;
`;

const buttonTypes = {
  primary: css`
    color: ${defaultTheme.textColorInverted};
    background-color: ${defaultTheme.buttonPrimaryColor};
    ${borderStyles}
    :hover {
      background-color: ${defaultTheme.primaryHoverColor};
    }
  `,
  secondary: css`
    color: ${defaultTheme.textColor};
    background-image: ${defaultTheme.secondaryColor};
    ${borderStyles}
    :hover {
      background-image: ${defaultTheme.secondaryHoverColor};
    }
  `,
  tertiary: css`
    color: ${defaultTheme.textColorInverted};
    background-color: transparent;
    border: 1px solid ${defaultTheme.tertiaryBorderColor};
    :hover {
      border: 1px solid ${defaultTheme.tertiaryHoverColor};
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
