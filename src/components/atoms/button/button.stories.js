import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const Default = () => (
  <Button varient="primary" onClick={action('clicked')}>
    Primary Button
  </Button>
);

export const Secondary = () => (
  <Button varient="secondary" onClick={action('clicked')}>
    Secondary Button
  </Button>
);

export const Tertiary = () => (
  <Button varient="tertiary" onClick={action('clicked')}>
    Tertiary Button
  </Button>
);
