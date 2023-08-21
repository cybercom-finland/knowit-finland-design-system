import React from 'react';
import styled, { css } from 'styled-components';
import { ComponentBaseProps, typography } from '../../shared';

/**
 * Helper text component properties
 * Extends global html attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span#attributes
 */
export interface HelperTextProps
  extends ComponentBaseProps<HTMLSpanElement>,
    React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Text content
   */
  children?: string;

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
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  pointer-events: none;
  display: block;
  font-size: ${typography.size.paragraph2};
  line-height: ${typography.lineHeight.paragraph2};
  font-weight: ${typography.weight.regular};
  ${({ disabled, error }) =>
    error
      ? css`
          color: ${(props) => props.theme.colors.danger.danger800};
        `
      : disabled
      ? css`
          color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
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
