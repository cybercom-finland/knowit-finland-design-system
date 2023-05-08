import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { spacing, typography, generateRandomString } from 'shared';
import { Label } from '../Label';
import { Wrapper, WrapperProps } from '../Wrapper';
import {
  FilledInputStyles,
  InputBaseProps,
  InputRow,
  OutlinedInputStyles,
  baseInputStyles,
} from 'components/Input';
import { HelperText } from 'components/HelperText';

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
    props.disabled ? props.theme.colors.digitalBlack300 : 'inherit'};
`;

/**
 * Dropdown option
 */
export type DropdownOption = React.OptionHTMLAttributes<HTMLOptionElement>;

/**
 * Dropdown component properties
 * Extends html select component attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes
 */
export interface DropdownProps
  extends InputBaseProps,
    WrapperProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'multiple'> {
  /**
   * Controlled input value
   */
  value?: React.SelectHTMLAttributes<HTMLSelectElement>['value'];

  /**
   * Dropdown options
   */
  options: DropdownOption[];

  /**
   * On select event handler
   * @param event event
   */
  onSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Dropdown component
 */
export const Dropdown = ({
  id,
  label,
  helperText,
  disabled,
  error,
  margin,
  width,
  options,
  endIcon,
  variant = 'outlined',
  ...props
}: DropdownProps) => {
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
      {label && (
        <Label
          disabled={disabled}
          error={error}
          htmlFor={`select-${componentId}`}
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
        <SelectInputWrapper>
          <DropdownArrow disabled={disabled} />
          <SelectComponent
            disabled={disabled}
            error={error}
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
      </InputRow>
    </Wrapper>
  );
};
