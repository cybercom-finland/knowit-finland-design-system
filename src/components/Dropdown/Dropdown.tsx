import React from 'react';
import styled, { css } from 'styled-components';
import { MdKeyboardArrowDown } from 'react-icons/md';

import {
  colors,
  spacing,
  typography,
  generateRandomString,
} from '../../shared';
import { Label } from '../Label';
import { Wrapper, WrapperProps } from '../Wrapper';

interface BaseProps {
  disabled?: boolean;
  error?: boolean;
  value?: string | number;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Main component
 */
const SelectBase = styled.select<BaseProps>`
  box-sizing: border-box;
  border: 1px solid ${colors.base.digitalBlack};
  border-radius: 4px;
  color: ${colors.base.digitalBlack};
  display: block;
  font-family: ${typography.font};
  font-size: ${typography.size.paragraph2};
  font-weight: ${typography.weight.regular};
  padding: ${spacing([2.5, 1.5])};
  width: 100%;
  ${({ error }) =>
    error
      ? css`
          border-color: ${colors.semantic.danger800} !important;
        `
      : ''}
  &:hover {
    border-width: 2px;
  }
  &:active,
  &:focus {
    border-width: 3px;
    outline: none;
  }
  &:disabled {
    border-color: ${colors.base.digitalBlack300};
    border-width: 1px !important;
    color: ${colors.base.digitalBlack300};
  }
  &::placeholder:not(:disabled) {
    color: ${colors.base.digitalBlack400};
  }
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const FilledSelect = styled(SelectBase)`
  background-color: ${colors.base.digitalBlack100};
`;

const OutlinedSelect = styled(SelectBase)`
  background-color: ${colors.base.neutral};
  &:disabled {
    background-color: ${colors.base.digitalBlack100};
  }
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

export interface Option {
  label?: string;
  value: string | number;
}

interface Props extends BaseProps, WrapperProps {
  label?: string;
  helperText?: string;
  placeholder?: string;
  options: Option[];
  variant: 'filled' | 'outlined';
}

export const Dropdown = ({
  label,
  helperText,
  disabled,
  error,
  margin,
  width,
  options,
  variant,
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
