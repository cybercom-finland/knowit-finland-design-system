import React from 'react';
import styled, { css } from 'styled-components';

import {
  spacing,
  typography,
  generateRandomString,
  convertToSpacingUnit,
  pxToRem,
  InputVariant,
} from '../../shared';
import { Label } from '../Label';
import { Wrapper, WrapperProps } from '../Wrapper';
import { HelperText } from '../HelperText';

/**
 * Input dimensions
 */
const inputDimensions = {
  verticalSpacing: 2.5,
  horizontalSpacing: 1.5,
  border: 1,
  boderHover: 2,
  boderActive: 3,
  contentSpacing: 1,
};

/**
 * Internal properties for styles
 */
export interface InputBaseProps {
  /**
   * Is there an error in value? Ignored if component is disabled
   */
  error?: boolean;

  /**
   * Layout variant
   */
  variant?: InputVariant;

  /**
   * Label text
   */
  label?: string;

  /**
   * Additional helper text below component
   */
  helperText?: string;

  /**
   * Optional icon after the text
   */
  endIcon?: React.ReactNode;

  /**
   * Placeholder text when value is empty
   */
  placeholder?: string;

  /**
   * Is component disabled?
   */
  disabled?: boolean;

  /**
   * Is component required?
   */
  required?: boolean;
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
          : props.theme.colors.danger800};
    border-radius: 4px;
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
      border-color: ${(props) =>
        !inputProps.error
          ? props.theme.colors.digitalBlack300
          : props.theme.colors.danger800};
      border-width: ${pxToRem(inputDimensions.border)};
      color: ${(props) => props.theme.colors.digitalBlack300};
    }

    &::placeholder {
      color: ${(props) =>
        inputProps.disabled
          ? props.theme.colors.digitalBlack300
          : props.theme.colors.digitalBlack400};
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
 * Input base default props
 */
InputBase.defaultProps = {
  type: 'text',
};

/**
 * Filled input styles
 * @returns CSS for filled input styles
 */
export const FilledInputStyles = () => {
  return css`
    background: ${(props) => props.theme.colors.digitalBlack100};
  `;
};

/**
 * Filled input component
 */
const FilledInput = styled(InputBase)`
  ${FilledInputStyles};
`;

/**
 * Outlined input styles
 * @returns CSS for outlined input styles
 */
export const OutlinedInputStyles = () => {
  return css`
    background: ${(props) => props.theme.colors.neutral};
    &:disabled {
      background: ${(props) => props.theme.colors.digitalBlack200};
    }
  `;
};

/**
 * Outlined input component
 */
const OutlinedInput = styled(InputBase)`
  ${OutlinedInputStyles}
`;

/**
 * Input row component
 */
export const InputRow = styled.div<React.PropsWithChildren>`
  color: ${(props) => props.theme.colors.digitalBlack};
  display: flex;
  align-items: center;
  gap: ${spacing(inputDimensions.contentSpacing)};
`;

/**
 * Input wrapper props
 */
export interface InputWrapperProps extends InputBaseProps {
  /**
   * Component id
   */
  id?: string;

  /**
   * Actual input component
   */
  children?: React.ReactNode;
}

/**
 * InputWrapper
 * Helper component to create Labelled inputs with consistent styles
 */
export const InputWrapper = ({
  id,
  children,
  label,
  helperText,
  disabled,
  error,
  required,
}: InputWrapperProps) => {
  return (
    <>
      {label && (
        <Label
          disabled={disabled}
          error={error}
          required={required}
          htmlFor={`input-${id}`}
          id={`label-${id}`}
        >
          {label}
        </Label>
      )}
      {helperText && (
        <HelperText disabled={disabled} error={error} id={`helper-${id}`}>
          {helperText}
        </HelperText>
      )}
      <InputRow>{children}</InputRow>
    </>
  );
};

/**
 * Input component properties
 */
export interface InputProps {
  /**
   * Controlled input value
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];

  /**
   * Supported input types
   */
  type?: 'number' | 'text' | 'email' | 'password' | 'tel' | 'url';

  /**
   * Is component read only?
   */
  readOnly?: boolean;

  /**
   * Ref object for the native input element
   */
  ref?: React.RefObject<HTMLInputElement>;

  /**
   * Change event handler passed from internal component
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Mouse click event handler passed from internal component
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;

  /**
   * Blur event handler passed from internal component
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * All props together
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
 */
type Props = InputProps &
  InputBaseProps &
  WrapperProps &
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
  >;

/**
 * Input component
 */
export const Input = ({
  id,
  variant = 'outlined',
  label,
  helperText,
  disabled = false,
  error = false,
  readOnly = false,
  required = false,
  width,
  endIcon,
  ...restProps
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

  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <Wrapper width={width}>
      <InputWrapper
        id={componentId}
        label={label}
        helperText={helperText}
        disabled={disabled}
        error={error}
        required={required}
      >
        <InputComponent
          disabled={disabled}
          error={error}
          required={required}
          readOnly={readOnly}
          id={`input-${componentId}`}
          aria-labelledby={label && `label-${componentId}`}
          aria-describedby={helperText && `helper-${componentId}`}
          {...restProps}
        />
        {endIcon}
      </InputWrapper>
    </Wrapper>
  );
};
