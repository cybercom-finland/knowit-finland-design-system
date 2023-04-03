import React from 'react';
import styled, { css } from 'styled-components';

import {
  colors,
  spacing,
  typography,
  generateRandomString,
} from '../../shared';
import { Label } from '../Label';
import { Wrapper, WrapperProps } from '../Wrapper';

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
  box-sizing: border-box;
  border: 1px solid ${colors.base.digitalBlack};
  border-radius: 4px;
  display: block;
  font-family: ${typography.font};
  font-size: ${typography.size.paragraph2};
  font-weight: ${typography.weight.regular};
  padding: ${spacing([2.5, 1.5])};
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
  &::placeholder {
    color: ${colors.base.digitalBlack400};
  }
  &::placeholder:disabled {
    color: ${colors.base.digitalBlack300};
  }
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
  const id = generateRandomString(5); // randomized part for id to avoid duplicates with multiple inputs
  return (
    <Wrapper width={width}>
      {label && (
        <Label
          bold
          disabled={disabled}
          error={error}
          htmlFor={`input-${id}`}
          id={`label-${id}`}
        >
          {label}
        </Label>
      )}
      {helperText && (
        <Label
          disabled={disabled}
          error={error}
          htmlFor={`input-${id}`}
          id={`helper-${id}`}
        >
          {helperText}
        </Label>
      )}
      <InputComponent
        disabled={disabled}
        error={error}
        id={`input-${id}`}
        aria-labelledby={label && `label-${id}`}
        aria-describedby={helperText && `helper-${id}`}
        {...props}
      />
    </Wrapper>
  );
};
