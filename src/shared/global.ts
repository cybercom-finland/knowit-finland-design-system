import { createGlobalStyle, css } from 'styled-components';
import { colors, typography } from './styles';

export const bodyStyles = css`
  font-family: "${typography.font}", sans-serif;
  font-size: ${typography.size};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }
`;
