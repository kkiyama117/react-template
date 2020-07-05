import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { Button } from '../../src/app/shared/components/Button';
import { darkTheme, lightTheme } from '../../src/styles/theme/themes';

export default {
  title: 'Button',
  component: Button,
};

export const whiteButton = () => (
  <ThemeProvider theme={lightTheme}>
    <Button>test</Button>
  </ThemeProvider>
);

export const blackButton = () => (
  <ThemeProvider theme={darkTheme}>
    <Button>test</Button>
  </ThemeProvider>
);
export const Emoji = () => (
  <ThemeProvider theme={lightTheme}>
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  </ThemeProvider>
);
