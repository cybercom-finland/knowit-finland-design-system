import React from 'react';
import {
  pxToRem,
  generateRandomString,
  InputComponentBaseProps,
} from '../../shared';
import { MdSearch } from 'react-icons/md';
import { Input, InputBaseProps } from '../Input';

type SearchInputBaseProps = Omit<InputBaseProps, 'error' | 'endIcon'>;

/**
 * Used HTML Attributes
 */
type SearchInputHTMLAttributes = Omit<
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
 * Search component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search#additional_attributes
 */
export interface SearchProps
  extends InputComponentBaseProps<HTMLInputElement>,
    SearchInputBaseProps,
    SearchInputHTMLAttributes {
  /**
   * Search value
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
}

/**
 * Exported component
 */
export const Search = ({ id, ...restProps }: SearchProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <Input
      id={`search-${componentId}`}
      endIcon={<MdSearch size={pxToRem(24)} />}
      type={'search'}
      {...restProps}
    />
  );
};
