import React from 'react';
import { GlobalStyle } from './global';
import { darkTheme, lightTheme } from './themes';
import { ThemeProvider } from 'styled-components';

interface ThemeProps extends React.PropsWithChildren {
  theme: 'light' | 'dark';
}

export const Theme = ({ theme, children }: ThemeProps) => {
  const usedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={usedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
