import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, typography } from '../../shared';

/**
 * Helper text component properties
 * Extends global html attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span#attributes
 */
export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Error state
   */
  error?: boolean;
}

/**
 * Helper text inner component to wrap styles
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
 * Helper text component
 * @param props Helper text props
 * @returns Helper text component
 */
export const HelperText = ({
  disabled = false,
  error = false,
  ...restProps
}: HelperTextProps) => {
  const props = { disabled, error, ...restProps };
  return <InnerHelperText {...props} />;
};
