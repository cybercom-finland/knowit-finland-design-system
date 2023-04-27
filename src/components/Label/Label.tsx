import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, typography } from 'shared';

/**
 * Properties for styles
 */
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Control font weight
   */
  bold?: boolean;
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
const InnerLabel = styled.label<LabelProps>`
  color: ${(props) => props.theme.base.digitalBlack};
  pointer-events: none;
  margin: ${spacing([0.75, 0])};
  display: block;
  font-weight: ${({ bold }) =>
    bold ? typography.weight.bold : typography.weight.regular};
  ${({ disabled, error }) =>
    error
      ? css`
          color: ${(props) => props.theme.semantic.danger800};
        `
      : disabled
      ? css`
          color: ${(props) => props.theme.base.digitalBlack300};
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
