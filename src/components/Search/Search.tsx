import React from 'react';
import styled, { css } from 'styled-components';
import {
  pxToRem,
  generateRandomString,
  InputComponentBaseProps,
  InputVariant,
} from '../../shared';
import { MdSearch } from 'react-icons/md';
import { Input, InputBaseProps } from '../Input';

type SearchInputBaseProps = Omit<InputBaseProps, 'error' | 'endIcon'>;

/**
 * Used HTML Attributes
 */
type SearchInputHTMLAttributes = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  | 'size'
  | 'type'
  | 'accept'
  | 'autoComplete'
  | 'checked'
  | 'list'
  | 'max'
  | 'min'
  | 'maxLength'
  | 'minLength'
  | 'multiple'
  | 'pattern'
  | 'placeholder'
  | 'dirName'
  | 'alt'
  | 'capture'
  | 'step'
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

  /**
   * Is component read only?
   */
  readOnly?: boolean;
}

/**
 * Exported component
 */
export const Search = ({
  id,
  label,
  helperText,
  ...restProps
}: SearchProps) => {
  // Use Id form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <Input
      id={`search-${componentId}`}
      endIcon={<MdSearch size={pxToRem(24)} />}
      label={label}
      helperText={helperText}
      aria-labelledby={label && `label-${componentId}`}
      aria-describedby={helperText && `helper-${componentId}`}
      type={'search'}
      {...restProps}
    />
  );
};
