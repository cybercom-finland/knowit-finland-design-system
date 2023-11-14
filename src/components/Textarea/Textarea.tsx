import React from 'react';
import styled from 'styled-components';

import { InputComponentBaseProps, generateRandomString } from '../../shared';
import {
  FilledInputStyles,
  InputBaseProps,
  InputWrapper,
  OutlinedInputStyles,
  baseInputStyles,
} from '../Input';

/**
 * Internal component styling
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TextareaBase = styled(({ error, ...restProps }: TextareaProps) => (
  <textarea {...restProps} />
))`
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
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

/**
 * Textarea component
 */
export const Textarea = React.forwardRef(
  (
    {
      id,
      variant = 'outlined',
      required = false,
      label,
      helperText,
      disabled = false,
      error = false,
      endIcon,
      ...restProps
    }: TextareaProps,
    ref: TextareaProps['ref']
  ) => {
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
      <InputWrapper
        id={componentId}
        label={label}
        helperText={helperText}
        disabled={disabled}
        error={error}
        required={required}
      >
        <TextareaComponent
          required={required}
          disabled={disabled}
          error={error}
          id={`textarea-${componentId}`}
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
