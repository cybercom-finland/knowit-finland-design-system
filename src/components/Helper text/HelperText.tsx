import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, typography } from 'shared';

/**
 * Properties for styles
 */
interface HelperTextProps extends React.HtmlHTMLAttributes<HTMLSpanElement> {
  /**
   * For disabled input
   */
  disabled?: boolean;
  /**
   * Input error state
   */
  error?: boolean;
}

/**
 * Label and helper text component
 */
const InnerHelperText = styled.span<HelperTextProps>`
  color: ${(props) => props.theme.colors.digitalBlack};
  pointer-events: none;
  margin: ${spacing([0.75, 0])};
  display: block;
  font-weight: ${typography.weight.regular};
  ${({ disabled, error }) =>
    error
      ? css`
          color: ${(props) => props.theme.colors.danger800};
        `
      : disabled
      ? css`
          color: ${(props) => props.theme.colors.digitalBlack300};
        `
      : ''}
`;

/**
 * Label component
 * @param props Label props
 * @returns Label component
 */
export const HelperText = (props: HelperTextProps) => {
  return <InnerHelperText {...props} />;
};
