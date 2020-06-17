import React from 'react';
import { MenuItem } from './menuItem/';
import { StyledUl } from './menu.styled';
import { menuData } from './menu.data';

const MenuItems = menuData.map((menu, key) => (
  <MenuItem key={key}>{menu.name}</MenuItem>
));

export const Menu = () => <StyledUl>{MenuItems}</StyledUl>;
