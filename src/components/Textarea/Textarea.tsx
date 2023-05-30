import React from 'react';
import styled from 'styled-components';

import { InputComponentBaseProps, generateRandomString } from '../../shared';
import { Label } from '../Label';
import { Wrapper, WrapperProps } from '../Wrapper';
import { HelperText } from '../HelperText';
import {
  FilledInputStyles,
  InputBaseProps,
  InputRow,
  OutlinedInputStyles,
  baseInputStyles,
} from '../Input';

/**
 * Internal component styling
 */
const TextareaBase = styled.textarea`
  ${baseInputStyles}
`;

/**
 * Filled
 */
const FilledTextarea = styled(TextareaBase)`
  ${FilledInputStyles};
`;

/**
 * Outlined
 */
const OutlinedTextarea = styled(TextareaBase)`
  ${OutlinedInputStyles}
`;

/**
 * Text area props
 * Extends html textarea element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 */
export type TextareaProps = InputComponentBaseProps<HTMLTextAreaElement> &
  InputBaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  WrapperProps;

/**
 * Textarea component
 */
export const Textarea = ({
  id,
  variant = 'outlined',
  required = false,
  label,
  helperText,
  disabled = false,
  error = false,
  width,
  endIcon,
  ...restProps
}: TextareaProps) => {
  let TextareaComponent;
  switch (variant) {
    case 'filled':
      TextareaComponent = FilledTextarea;
      break;
    case 'outlined':
      TextareaComponent = OutlinedTextarea;
      break;
  }

  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <Wrapper width={width}>
      {label && (
        <Label
          required={required}
          disabled={disabled}
          error={error}
          htmlFor={`textarea-${componentId}`}
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
      <InputRow>
        <TextareaComponent
          required={required}
          disabled={disabled}
          error={error}
          id={`textarea-${componentId}`}
          aria-labelledby={label && `label-${componentId}`}
          aria-describedby={helperText && `helper-${componentId}`}
          {...restProps}
        />
        {endIcon}
      </InputRow>
    </Wrapper>
  );
};
