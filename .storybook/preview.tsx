import React from 'react';
import { GlobalStyle } from '../src/shared/global';
import { darkTheme, lightTheme } from '../src/shared';
import styled, { css, ThemeProvider } from 'styled-components';
import { Decorator } from '@storybook/react';

// Helper to change story bg color according to the theme
const ThemeBlock = styled.div(
  ({ theme }) =>
    css`
      padding: 1rem;
      box-sizing: border-box;
      background: ${theme.colors.neutral};
    `
);

// Global decorator to apply the styles to all stories
const withTheme: Decorator = (Story, context) => {
  // Get values from story parameter first, else fallback to globals
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === 'light' ? lightTheme : darkTheme;

  switch (theme) {
    case 'both': {
      return (
        <>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <ThemeBlock>
              <Story />
            </ThemeBlock>
          </ThemeProvider>
          <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <ThemeBlock>
              <Story />
            </ThemeBlock>
          </ThemeProvider>
        </>
      );
    }
    default: {
      return (
        <ThemeProvider theme={storyTheme}>
          <GlobalStyle />
          <ThemeBlock>
            <Story />
          </ThemeBlock>
        </ThemeProvider>
      );
    }
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Theme for the components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
        { value: 'both', icon: 'sidebar', title: 'both' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};
export const decorators = [withTheme];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
