import React from 'react';
import { GlobalStyle } from '../../shared/global';
import { darkTheme, lightTheme } from '../../shared/themes';
import { ThemeProvider } from 'styled-components';

interface ThemeProps extends React.PropsWithChildren {
  theme: 'light' | 'dark' | Record<string, unknown>;
}

export const Theme = ({ theme = 'light', children }: ThemeProps) => {
  const usedTheme = () => {
    switch (theme) {
      case 'light':
        return lightTheme;
        break;
      case 'dark':
        return darkTheme;
        break;
      default:
        return theme;
        break;
    }
  };

  return (
    <ThemeProvider theme={usedTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
