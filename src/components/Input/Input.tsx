import React from 'react';
import styled, { css } from 'styled-components';

import {
  spacing,
  typography,
  generateRandomString,
  convertToSpacingUnit,
  pxToRem,
  InputVariant,
  InputComponentBaseProps,
} from '../../shared';
import { Label } from '../Label';
import { HelperText } from '../HelperText';

/**
 * Input dimensions
 */
const inputDimensions = {
  verticalSpacing: 2,
  horizontalSpacing: 1.5,
  border: 1,
  boderHover: 2,
  boderActive: 3,
  contentSpacing: 1,
};

/**
 * Styles for base input
 * @returns CSS for input base
 */
export const baseInputStyles = (inputProps: InputBaseProps) => {
  return css`
    color: ${(props) => props.theme.colors.grayScale.digitalBlack};
    box-sizing: border-box;
    border: ${pxToRem(inputDimensions.border)} solid
      ${(props) =>
        !inputProps.error
          ? props.theme.colors.grayScale.digitalBlack
          : props.theme.colors.danger.danger800};
    border-radius: 4px;
    font-family: ${typography.font};
    font-size: ${typography.size.paragraph2};
    font-weight: ${typography.weight.regular};
    line-height: ${typography.lineHeight.paragraph2};
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
          ? props.theme.colors.grayScale.digitalBlack300
          : props.theme.colors.danger.danger800};
      border-width: ${pxToRem(inputDimensions.border)};
      color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
    }

    &::placeholder {
      color: ${(props) =>
        inputProps.disabled
          ? props.theme.colors.grayScale.digitalBlack300
          : props.theme.colors.grayScale.digitalBlack400};
    }
  `;
};

/**
 * Internal component styling
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InputBase = styled(({ error, ...restProps }: InputProps) => (
  <input {...restProps} />
))`
  ${baseInputStyles}
`;

/**
 * Filled input styles
 * @returns CSS for filled input styles
 */
export const FilledInputStyles = () => {
  return css`
    background: ${(props) => props.theme.colors.grayScale.digitalBlack100};
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
      background: ${(props) => props.theme.colors.grayScale.digitalBlack200};
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
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
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
 * Used HTML Attributes
 */
type InputHTMLAttributes = Omit<
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
 * Input component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
 */
export interface InputProps
  extends InputComponentBaseProps<HTMLInputElement>,
    InputBaseProps,
    InputHTMLAttributes {
  /**
   * Controlled input value
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];

  /**
   * Supported input types
   */
  type?:
    | 'number'
    | 'text'
    | 'email'
    | 'password'
    | 'tel'
    | 'url'
    | 'search'
    | 'date';

  /**
   * Is component read only?
   */
  readOnly?: boolean;
}

/**
 * Input component
 */
export const Input = React.forwardRef(
  (
    {
      id,
      variant = 'outlined',
      label,
      helperText,
      disabled = false,
      error = false,
      readOnly = false,
      required = false,
      endIcon,
      ...restProps
    }: InputProps,
    ref: InputProps['ref']
  ) => {
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
          ref={ref}
          {...restProps}
        />
        {endIcon}
      </InputWrapper>
    );
  }
);
