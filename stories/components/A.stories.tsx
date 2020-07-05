import * as React from 'react';
// import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../src/styles/theme/themes';
import { A } from '../../src/app/shared/components/A';

export default {
  title: 'A',
  component: A,
};

export const whiteA = () => (
  <ThemeProvider theme={lightTheme}>
    <A>test</A>
  </ThemeProvider>
);

export const blackA = () => (
  <ThemeProvider theme={darkTheme}>
    <A>test</A>
  </ThemeProvider>
);
