import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, typography } from 'shared';

/**
 * Label properties
 */
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Error state
   */
  error?: boolean;
}

/**
 * Label inner component to wrap styles
 */
const InnerLabel = styled.label<LabelProps>`
  color: ${(props) => props.theme.colors.digitalBlack};
  pointer-events: none;
  margin: ${spacing([0.75, 0])};
  display: block;
  font-weight: ${typography.weight.bold};
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
export const Label = (props: LabelProps) => {
  return <InnerLabel {...props} />;
};
