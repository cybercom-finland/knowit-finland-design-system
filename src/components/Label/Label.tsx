import React from 'react';
import styled, { css } from 'styled-components';
import { ComponentBaseProps, spacing, typography } from '../../shared';

/**
 * Label component properties
 * Extends html label attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes
 */
export interface LabelProps
  extends ComponentBaseProps<HTMLLabelElement>,
    React.LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * Text content
   */

  children?: React.ReactNode;

  /**
   * Disabled state
   */
  disabled?: boolean;

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Show required marker on Label
   */
  required?: boolean;
}

/**
 * Label inner component to wrap styles
 */
const InnerLabel = styled.label<LabelProps>`
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  pointer-events: none;
  display: flex;
  font-weight: ${typography.weight.bold};
  ${({ disabled, error }) =>
    error
      ? css`
          color: ${(props) => props.theme.colors.danger.danger800};
        `
      : disabled
      ? css`
          color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
        `
      : ''};
  ${({ required }) =>
    required &&
    css`
      &::after {
        margin-left: ${spacing(0.5)};
        content: '*';
      }
    `}
`;

/**
 * Label component
 * @param props Label props
 * @returns Label component
 */
export const Label = ({
  disabled = false,
  error = false,
  required = false,
  ...restProps
}: LabelProps) => {
  const props = { disabled, error, required, ...restProps };
  return <InnerLabel {...props} />;
};

const formLabelDimension = {
  contentSpacing: spacing(1),
};

/**
 * Label component wrapper for components that need pointer events.
 * E.g. checkbox and radio button
 */
export const FormLabel = styled(Label)`
  pointer-events: unset;
  cursor: pointer;
  align-items: center;
  gap: ${formLabelDimension.contentSpacing};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}
`;
