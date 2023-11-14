import React from 'react';
import { generateRandomString, InputComponentBaseProps } from '../../shared';
import { Input, InputBaseProps } from '../Input';
import { WrapperProps } from '../Wrapper';

/**
 * Used HTML Attributes
 */
type DatePickerInputHTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'accept'
  | 'alt'
  | 'multiple'
  | 'type'
  | 'capture'
  | 'checked'
  | 'formAction'
  | 'formEncType'
  | 'formMethod'
  | 'formNoValidate'
  | 'formTarget'
  | 'height'
  | 'src'
  | 'width'
>;

/**
 * DatePicker component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#additional_attributes
 */
export interface DatePickerProps
  extends InputComponentBaseProps<HTMLInputElement>,
    InputBaseProps,
    DatePickerInputHTMLAttributes,
    WrapperProps {
  /**
   * DatePicker value
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
}

/**
 * DatePicker component
 */
export const DatePicker = React.forwardRef(
  ({ id, ...restProps }: DatePickerProps, ref: DatePickerProps['ref']) => {
    // Use Id form props or create randomized string
    const componentId = id ?? generateRandomString(5);

    return (
      <Input
        id={`datepicker-${componentId}`}
        type={'date'}
        ref={ref}
        {...restProps}
      />
    );
  }
);
