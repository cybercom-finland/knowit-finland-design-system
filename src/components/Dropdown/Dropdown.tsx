import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  spacing,
  typography,
  generateRandomString,
  InputComponentBaseProps,
} from '../../shared';
import {
  FilledInputStyles,
  InputBaseProps,
  InputWrapper,
  OutlinedInputStyles,
  baseInputStyles,
} from '../Input';

/**
 * Base Select
 * Popout error property
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SelectBase = ({ error, ...restProps }: DropdownProps) => (
  <select {...restProps} />
);

/**
 * Main component
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledSelect = styled(SelectBase)`
  ${baseInputStyles};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

/**
 * Filled select
 */
const FilledSelect = styled(StyledSelect)`
  ${FilledInputStyles};
`;

/**
 * Outlined select
 */
const OutlinedSelect = styled(StyledSelect)`
  ${OutlinedInputStyles}
`;

/**
 * Helper to wrap select related elements
 */
const SelectInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

/**
 * Dropdown options component
 */
const DropdownOption = styled.option`
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  color: inherit;
  font-size: ${typography.size.paragraph2};
  font-weight: ${typography.weight.regular};
  line-height: ${typography.size.paragraph2};
`;

/**
 * Dropdown arrow component
 */
const DropdownArrow = styled(MdKeyboardArrowDown)<{ disabled?: boolean }>`
  font-size: ${typography.size.paragraph2};
  position: absolute;
  right: ${spacing(1.5)};
  pointer-events: none;
  z-index: 100;
  color: ${(props) =>
    props.disabled ? props.theme.colors.grayScale.digitalBlack300 : 'inherit'};
`;

/**
 * Dropdown option
 */
export type DropdownOption = React.OptionHTMLAttributes<HTMLOptionElement>;

/**
 * Used HTML Attributes
 */
type SelectHTMLAttributes = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  'multiple'
>;

/**
 * Dropdown component properties
 * Extends html select component attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes
 */
export interface DropdownProps
  extends InputComponentBaseProps<HTMLSelectElement>,
    InputBaseProps,
    SelectHTMLAttributes {
  /**
   * Controlled input value
   */
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];

  /**
   * Dropdown options
   */
  children: React.ReactNode;
}

/**
 * Dropdown component
 */
export const Dropdown = React.forwardRef(
  (
    {
      id,
      label,
      helperText,
      disabled = false,
      error = false,
      required = false,
      endIcon,
      variant = 'outlined',
      children,
      ...restProps
    }: DropdownProps,
    ref: DropdownProps['ref']
  ) => {
    let SelectComponent;
    switch (variant) {
      case 'filled':
        SelectComponent = FilledSelect;
        break;
      case 'outlined':
        SelectComponent = OutlinedSelect;
        break;
    }

    // randomized part for id to avoid duplicates with multiple inputs
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
        <SelectInputWrapper>
          <DropdownArrow disabled={disabled} />
          <SelectComponent
            disabled={disabled}
            error={error}
            required={required}
            id={`select-${componentId}`}
            aria-labelledby={label && `label-${componentId}`}
            aria-describedby={helperText && `helper-${componentId}`}
            data-testid='dropdown'
            ref={ref}
            {...restProps}
          >
            {children}
          </SelectComponent>
        </SelectInputWrapper>
        {endIcon}
      </InputWrapper>
    );
  }
);
