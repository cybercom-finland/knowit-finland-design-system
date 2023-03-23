import React from 'react';
import styled, { css } from 'styled-components';
import { colors, spacing, typography } from '../../shared';

/**
 * Internal properties for styles
 */
interface InputProps {
  /**
   * Controlled input value
   */
  value?: string;
  /**
   * Placeholder text when value is empty
   */
  placeholder?: string;
  /**
   * Is input disabled?
   */
  disabled?: boolean;
  /**
   * Is there an error in input value? Ignored if input is disabled
   */
  error?: boolean;
  /**
   * Change event handler passed from internal component
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Mouse click event handler passed from internal component
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  /**
   * Blur event handler passed from internal component
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Internal component styling
 */
const InputBase = styled.input<InputProps>`
  border: 1px solid ${colors.base.digitalBlack};
  border-radius: 4px;
  font-family: ${typography.font};
  font-size: ${typography.size.paragraph2};
  font-weight: ${typography.weight.regular};
  padding: ${spacing([2.5, 1.5])};
  display: block;
  width: 100%;
  &:hover {
    border-width: 2px;
  }
  &:active,
  &:focus {
    border-width: 3px;
    outline: none;
  }
  &:disabled {
    border-color: ${colors.base.digitalBlack300};
    border-width: 1px !important;
    color: ${colors.base.digitalBlack300};
  }
  ${({ error }) =>
    error &&
    css`
      border-color: ${colors.semantic.danger} !important;
    `}
`;

/**
 * Internal default properties
 */
InputBase.defaultProps = {
  type: 'text',
};

const FilledInput = styled(InputBase)`
  background: ${colors.base.digitalBlack100};
`;

const OutlinedInput = styled(InputBase)`
  background: ${colors.base.neutral};
  &:disabled {
    background: ${colors.base.digitalBlack200};
  }
`;

/**
 * Label and helper text component
 */
const Label = styled.label<{ disabled?: boolean; error?: boolean }>`
  margin: ${spacing([0.75, 0])};
  display: block;
  ${({ disabled, error }) =>
    error
      ? css`
          color: ${colors.semantic.danger};
        `
      : disabled
      ? css`
          color: ${colors.base.digitalBlack300};
        `
      : ''}
`;

/**
 * Properties of wrapper div of whole component
 */
interface WrapperProps {
  /**
   * Wrapper width in px, if undefined the component takes width of containing element
   */
  width?: number;
}

/**
 * Wrap all components with div
 */
const Wrapper = styled.div<WrapperProps>`
  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          flex: 1;
        `};
`;

/**
 * External properties
 */
interface Props extends InputProps, WrapperProps {
  /**
   * Input layout variant
   */
  variant?: 'outlined' | 'filled';
  /**
   * Input label text
   */
  label?: string;
  /**
   * Additional helper text below input
   */
  helperText?: string;
}

export const Input = ({
  variant = 'filled',
  label,
  helperText,
  disabled,
  error,
  width,
  ...props
}: Props) => {
  let InputComponent;
  switch (variant) {
    case 'filled':
      InputComponent = FilledInput;
      break;
    case 'outlined':
      InputComponent = OutlinedInput;
      break;
  }
  return (
    <Wrapper width={width}>
      {label && (
        <Label disabled={disabled} error={error}>
          {label}
        </Label>
      )}
      <InputComponent disabled={disabled} error={error} {...props} />
      {helperText && (
        <Label disabled={disabled} error={error}>
          {helperText}
        </Label>
      )}
    </Wrapper>
  );
};
