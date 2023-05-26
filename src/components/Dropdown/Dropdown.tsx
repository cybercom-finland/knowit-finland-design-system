import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { spacing, typography, generateRandomString } from '../../shared';
import { Wrapper, WrapperProps } from '../Wrapper';
import {
  FilledInputStyles,
  InputBaseProps,
  InputWrapper,
  OutlinedInputStyles,
  baseInputStyles,
} from '../Input';

/**
 * Main component
 */
const SelectBase = styled.select<InputBaseProps>`
  ${baseInputStyles};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

/**
 * Filled select
 */
const FilledSelect = styled(SelectBase)`
  ${FilledInputStyles};
`;

/**
 * Outlined select
 */
const OutlinedSelect = styled(SelectBase)`
  ${OutlinedInputStyles}
`;

/**
 * Helper to wrap select related elements
 */
const SelectInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
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
 * Dropdown component properties
 */
export interface DropdownProps {
  /**
   * Controlled input value
   */
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];

  /**
   * Dropdown options
   */
  options: DropdownOption[];

  /**
   * Ref object for the native select element
   */
  ref?: React.RefObject<HTMLSelectElement>;

  /**
   * onChange event handler
   * @param event event
   */
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * All props together
 * Extends html select component attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes
 */
type Props = DropdownProps &
  InputBaseProps &
  WrapperProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'multiple'>;

/**
 * Dropdown component
 */
export const Dropdown = ({
  id,
  label,
  helperText,
  disabled = false,
  error = false,
  required = false,
  margin,
  width,
  options,
  endIcon,
  variant = 'outlined',
  ...props
}: Props) => {
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
    <Wrapper margin={margin} width={width}>
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
            {...props}
          >
            {options.map((option, index) => (
              <DropdownOption key={index} value={option.value}>
                {option.label || option.value}
              </DropdownOption>
            ))}
          </SelectComponent>
        </SelectInputWrapper>
        {endIcon}
      </InputWrapper>
    </Wrapper>
  );
};
