import React from 'react';
import StyledButton from './button.styled';

export const Button = ({ children, onClick, varient }) => (
  <StyledButton varient={varient} onClick={() => onClick()}>
    {children}
  </StyledButton>
);
