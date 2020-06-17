import React from 'react';

import { Menu } from '../../molecules/menu';
import { Logo } from '../../atoms/logo';
import { Banner } from '../../molecules/banner';

import { StyledHeader } from './header.styled';

export const Header = () => (
  <>
    <Banner />
    <StyledHeader>
      <Logo />
      <nav>
        <Menu />
      </nav>
    </StyledHeader>
  </>
);
