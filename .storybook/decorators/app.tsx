import React from 'react';
import { GlobalStyle } from '../../src/utils';

export default (storyFn) => (
  <>
    {storyFn()}
    <GlobalStyle />
  </>
);
