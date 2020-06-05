import React from 'react';
import { MenuItem } from '../../atoms/menuItem';
import { StyledUl } from './menu.styled';
import { menuData } from './menuData';

const MenuItems = menuData.map((menu, key) => (
  <MenuItem key={key}>{menu.name}</MenuItem>
));

export const Menu = () => <StyledUl>{MenuItems}</StyledUl>;
