import React from 'react';
import styled, { css } from 'styled-components';

import {
  colors,
  spacing,
  typography,
  generateRandomString,
  convertToSpacingUnit,
  pxToRem,
  SelectVariant,
} from '../../shared';
import { Label } from '../Label';
import { Wrapper, WrapperProps } from '../Wrapper';

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
   * Input layout variant
   */
  variant?: SelectVariant;
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
export const baseInputStyles = () => {
  return css`
    box-sizing: border-box;
    border: ${pxToRem(inputDimensions.border)} solid ${colors.base.digitalBlack};
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

    &:hover:not(:disabled) {
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
      border-color: ${colors.base.digitalBlack300};
      border-width: ${pxToRem(inputDimensions.border)};
      color: ${colors.base.digitalBlack300};
    }

    &::placeholder {
      color: ${colors.base.digitalBlack400};
    }
    &::placeholder:disabled {
      color: ${colors.base.digitalBlack300};
    }
  `;
};

/**
 * Internal component styling
 */
const InputBase = styled.input<InputBaseProps>`
  ${baseInputStyles}
  ${({ error }) =>
    error &&
    css`
      border-color: ${colors.semantic.danger};
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
 * External properties
 */
interface Props extends InputBaseProps, WrapperProps {
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
  variant = 'outlined',
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
