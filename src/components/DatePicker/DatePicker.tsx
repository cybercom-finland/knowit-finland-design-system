import React from 'react';
import {
  pxToRem,
  generateRandomString,
  InputComponentBaseProps,
} from '../../shared';
import { MdCalendarToday } from 'react-icons/md';
import { Input, InputBaseProps } from '../Input';

type DatePickerInputBaseProps = Omit<InputBaseProps, 'error' | 'endIcon'>;

/**
 * Used HTML Attributes
 */
type DatePickerInputHTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'accept'
  | 'alt'
  | 'min'
  | 'max'
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
    DatePickerInputBaseProps,
    DatePickerInputHTMLAttributes {
  /**
   * DatePicker value
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
}

/**
 * Exported component
 */
export const DatePicker = ({ id, ...restProps }: DatePickerProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <Input
      id={`search-${componentId}`}
      endIcon={<MdCalendarToday size={pxToRem(24)} />}
      type={'date'}
      {...restProps}
    />
  );
};
