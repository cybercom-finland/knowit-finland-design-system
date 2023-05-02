import React from 'react';
import styled, { css } from 'styled-components';

import {
  spacing,
  typography,
  generateRandomString,
  convertToSpacingUnit,
  pxToRem,
  InputVariant,
} from 'shared';
import { Label } from '../Label';
import { Wrapper, WrapperProps } from '../Wrapper';
import { HelperText } from 'components/Helper text';

/**
 * Input dimensions
 */
const inputDimensions = {
  verticalSpacing: 2.5,
  horizontalSpacing: 1.5,
  border: 1,
  boderHover: 2,
  boderActive: 3,
};

/**
 * Internal properties for styles
 */
export interface InputBaseProps {
  /**
   * Element id
   */
  id?: string;
  /**
   * Is there an error in input value? Ignored if input is disabled
   */
  error?: boolean;
  /**
   * Input layout variant
   */
  variant?: InputVariant;
  /**
   * Input label text
   */
  label?: string;
  /**
   * Additional helper text below input
   */
  helperText?: string;
}

/**
 * Styles for base input
 * @returns CSS for input base
 */
export const baseInputStyles = (inputProps: InputBaseProps) => {
  return css`
    color: ${(props) => props.theme.colors.digitalBlack};
    box-sizing: border-box;
    border: ${pxToRem(inputDimensions.border)} solid
      ${(props) =>
        !inputProps.error
          ? props.theme.colors.digitalBlack
          : props.theme.colors.danger};
    border-radius: 4px;
    display: block;
    font-family: ${typography.font};
    font-size: ${typography.size.paragraph2};
    font-weight: ${typography.weight.regular};
    padding: ${spacing([
      inputDimensions.verticalSpacing - convertToSpacingUnit(1),
      inputDimensions.horizontalSpacing - convertToSpacingUnit(1),
    ])};
    width: 100%;

    &:hover:not(:disabled):not(:active):not(:focus-visible) {
      border-width: ${pxToRem(inputDimensions.boderHover)};
      padding: ${spacing([
        inputDimensions.verticalSpacing - convertToSpacingUnit(2),
        inputDimensions.horizontalSpacing - convertToSpacingUnit(2),
      ])};
    }
    &:active:not(:disabled),
    &:focus-visible {
      border-width: ${pxToRem(inputDimensions.boderActive)};
      outline: none;
      padding: ${spacing([
        inputDimensions.verticalSpacing - convertToSpacingUnit(3),
        inputDimensions.horizontalSpacing - convertToSpacingUnit(3),
      ])};
    }
    &:disabled {
      border-color: ${(props) => props.theme.colors.digitalBlack300};
      border-width: ${pxToRem(inputDimensions.border)};
      color: ${(props) => props.theme.colors.digitalBlack300};
    }

    &::placeholder {
      color: ${(props) => props.theme.colors.digitalBlack400};
    }
    &::placeholder:disabled {
      color: ${(props) => props.theme.colors.digitalBlack300};
    }
  `;
};

/**
 * Internal component styling
 */
const InputBase = styled.input<InputBaseProps>`
  ${baseInputStyles}
`;

/**
 * Filled input styles
 * @returns CSS for filled input styles
 */
export const FilledInputStyles = () => {
  return css`
    background: ${(props) => props.theme.colors.digitalBlack100};
  `;
};

export const OutlinedInputStyles = () => {
  return css`
    background: ${(props) => props.theme.colors.neutral};
    &:disabled {
      background: ${(props) => props.theme.colors.digitalBlack200};
    }
  `;
};

/**
 * Internal default properties
 */
InputBase.defaultProps = {
  type: 'text',
};

const FilledInput = styled(InputBase)`
  ${FilledInputStyles};
`;

const OutlinedInput = styled(InputBase)`
  ${OutlinedInputStyles}
`;

/**
 * Input component properties
 * Extends default html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
 */
interface InputProps
  extends InputBaseProps,
    WrapperProps,
    Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      | 'accept'
      | 'alt'
      | 'capture'
      | 'checked'
      | 'formaction'
      | 'formEncType'
      | 'formMethod'
      | 'formNoValidate'
      | 'formTarget'
      | 'height'
      | 'src'
      | 'width'
    > {
  /**
   * Controlled input value
   */
  value?: string | number;

  /**
   * Placeholder text when value is empty
   */
  placeholder?: string;

  /**
   * Is input disabled?
   */
  disabled?: boolean;

  /**
   * Supported input types
   */
  type?: 'number' | 'text' | 'email' | 'password' | 'tel' | 'url';

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
 * Input component
 */
export const Input = ({
  id,
  variant = 'outlined',
  label,
  helperText,
  disabled,
  error,
  width,
  ...props
}: InputProps) => {
  let InputComponent;
  switch (variant) {
    case 'filled':
      InputComponent = FilledInput;
      break;
    case 'outlined':
      InputComponent = OutlinedInput;
      break;
  }
  const componentId = id ?? generateRandomString(5); // randomized part for id to avoid duplicates with multiple inputs
  return (
    <Wrapper width={width}>
      {label && (
        <Label
          disabled={disabled}
          error={error}
          htmlFor={`input-${componentId}`}
          id={`label-${componentId}`}
        >
          {label}
        </Label>
      )}
      {helperText && (
        <HelperText
          disabled={disabled}
          error={error}
          id={`helper-${componentId}`}
        >
          {helperText}
        </HelperText>
      )}
      <InputComponent
        disabled={disabled}
        error={error}
        id={`input-${componentId}`}
        aria-labelledby={label && `label-${componentId}`}
        aria-describedby={helperText && `helper-${componentId}`}
        {...props}
      />
    </Wrapper>
  );
};
