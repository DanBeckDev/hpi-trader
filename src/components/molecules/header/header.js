import React from 'react';
import { Menu } from '../../molecules/menu';
import { Logo } from '../../atoms/logo';
import { StyledHeader } from './header.styled';

export const Header = () => (
  <StyledHeader>
    <Logo />
    <nav>
      <Menu />
    </nav>
  </StyledHeader>
);
