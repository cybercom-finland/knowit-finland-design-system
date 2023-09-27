import { createGlobalStyle, css } from 'styled-components';
import { typography } from './styles';
import { modernNormalize } from './modernNormalize';

export const bodyStyles = css`
  font-family: '${typography.font}', sans-serif;
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};

  h1,
  h2,
  h3,
  h4 {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: ${typography.size.heading1};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.heading1};
  }
  h2 {
    font-size: ${typography.size.heading2};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.heading2};
  }
  h3 {
    font-size: ${typography.size.heading3};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.lineHeight.heading3};
  }
  h4 {
    font-size: ${typography.size.heading4};
    font-weight: ${typography.weight.bold};
    line-height: ${typography.lineHeight.heading4};
  }
  caption {
    font-size: ${typography.size.caption};
    line-height: ${typography.lineHeight.caption};
  }
  label {
    font-size: ${typography.size.label.medium};
    line-height: ${typography.lineHeight.label.medium};
  }
  p {
    font-size: ${typography.size.paragraph};
    line-height: ${typography.lineHeight.paragraph};
    margin: 0;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  body {
    ${bodyStyles}
  }
`;
