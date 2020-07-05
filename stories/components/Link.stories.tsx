import * as React from 'react';
// import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../src/styles/theme/themes';
import { Link } from '../../src/app/shared/components/Link';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Link',
  component: Link,
};

export const whiteA = () => (
  <ThemeProvider theme={lightTheme}>
    <BrowserRouter>
      <Link to={''}>test</Link>
    </BrowserRouter>
  </ThemeProvider>
);

export const blackA = () => (
  <ThemeProvider theme={darkTheme}>
    <BrowserRouter>
      <Link to={''}>test</Link>
    </BrowserRouter>
  </ThemeProvider>
);
