import React from 'react';
import styled from 'styled-components';

import { generateRandomString } from '../../shared';
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
const TextareaBase = styled.textarea<InputBaseProps>`
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
 */
interface TextareaProps {
  /**
   * Ref object for the native textarea element
   */
  ref?: React.RefObject<HTMLTextAreaElement>;
}

/**
 * All props together
 * Extends html textarea element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 */
type Props = InputBaseProps &
  WrapperProps &
  TextareaProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * Textarea component
 */
export const Textarea = ({
  id,
  variant = 'outlined',
  label,
  helperText,
  disabled,
  error,
  width,
  endIcon,
  ...props
}: Props) => {
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
          disabled={disabled}
          error={error}
          id={`textarea-${componentId}`}
          aria-labelledby={label && `label-${componentId}`}
          aria-describedby={helperText && `helper-${componentId}`}
          {...props}
        />
        {endIcon}
      </InputRow>
    </Wrapper>
  );
};
