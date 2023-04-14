import React from 'react';
import styled from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  spacing,
  typography,
  generateRandomString,
  colors,
} from '../../shared';
import { Label } from '../Label';
import { Wrapper, WrapperProps } from '../Wrapper';
import {
  FilledInputStyles,
  InputBaseProps,
  OutlinedInputStyles,
  baseInputStyles,
} from 'components/Input';

/**
 * Main component
 */
const SelectBase = styled.select<InputBaseProps>`
  ${baseInputStyles}
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const FilledSelect = styled(SelectBase)`
  ${FilledInputStyles};
`;

const OutlinedSelect = styled(SelectBase)`
  ${OutlinedInputStyles}
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const DropdownOption = styled.option`
  color: inherit;
  font-size: ${typography.size.paragraph2};
  font-weight: ${typography.weight.regular};
  line-height: ${typography.size.paragraph2};
`;

/**
 * Dropdown option
 */
export interface Option {
  /**
   * Option label
   */
  label?: string;
  /**
   * Option value
   */
  value: string | number;
}

/**
 * Dropsdown component properties
 */
interface Props extends InputBaseProps, WrapperProps {
  /**
   * Dropdown options
   */
  options: Option[];
  /**
   * On select event handler
   * @param e event
   * @returns -
   */
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Dropdown component
 */
export const Dropdown = ({
  label,
  helperText,
  disabled,
  error,
  margin,
  width,
  options,
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
  const id = generateRandomString(5);

  return (
    <Wrapper margin={margin} width={width}>
      {label && (
        <Label
          bold
          disabled={disabled}
          error={error}
          htmlFor={`select-${id}`}
          id={`label-${id}`}
        >
          {label}
        </Label>
      )}
      {helperText && (
        <Label
          disabled={disabled}
          error={error}
          htmlFor={`select-${id}`}
          id={`helper-${id}`}
        >
          {helperText}
        </Label>
      )}
      <InputWrapper>
        <MdKeyboardArrowDown
          style={{
            fontSize: typography.size.paragraph2,
            position: 'absolute',
            right: spacing(1.5),
            pointerEvents: 'none',
            zIndex: '100',
            color: disabled ? colors.base.digitalBlack300 : 'inherit',
          }}
        />
        <SelectComponent
          disabled={disabled}
          error={error}
          id={`select-${id}`}
          aria-labelledby={label && `label-${id}`}
          aria-describedby={helperText && `helper-${id}`}
          {...props}
        >
          {options.map((o, i) => (
            <DropdownOption key={i} value={o.value}>
              {o.label || o.value}
            </DropdownOption>
          ))}
        </SelectComponent>
      </InputWrapper>
    </Wrapper>
  );
};
