import React from 'react';
import {
  generateRandomString,
  InputComponentBaseProps,
  pxToRem,
  Size,
} from '../../shared';
import { InputBaseProps } from '../Input';
import styled, { css } from 'styled-components';
import { FormLabel } from '../Label';
import { variant } from 'styled-system';

type RadioInputBaseProps = Omit<
  InputBaseProps,
  'error' | 'endIcon' | 'variant'
>;

/**
 * Used HTML Attributes
 */
type RadioInputHTMLAttributes = Omit<
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
  | 'size'
  | 'placeholder'
  | 'helperText'
>;

/**
 * Search component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#additional_attributes
 */
export interface RadioProps
  extends InputComponentBaseProps<HTMLInputElement>,
    RadioInputBaseProps,
    RadioInputHTMLAttributes {
  /**
   * Radio value
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];

  /**
   * Radio is required
   */
  required?: boolean;

  /**
   * Size of radio
   */
  size?: Exclude<Size, 'medium'>;

  /**
   * Is radio checked
   */
  checked?: boolean;
}

const calculateSizes = () => {
  return css`
    ${variant({
      prop: 'size',
      variants: {
        small: {
          width: `${pxToRem(13)}`,
          height: `${pxToRem(13)}`,
        },
        large: {
          width: `${pxToRem(24)}`,
          height: `${pxToRem(24)}`,
        },
      },
    })};
  `;
};

const RadioComponentWrapper = styled.span<RadioProps>`
  font-size: ${pxToRem(18)};
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  border: none;
`;

const RadioSvgButton = styled.svg<RadioProps>`
  ${calculateSizes};
  fill: ${(props) => props.theme.colors.grayScale.digitalBlack};
`;

const RadioCircle = styled.circle<RadioProps>`
  stroke: ${(props) => props.theme.colors.grayScale.digitalBlack};

  ${({ disabled }) =>
    disabled
      ? css`
          stroke: ${(props) => props.theme.colors.grayScale.digitalBlack300};
        `
      : ''};
`;

const RadioDot = styled.circle<RadioProps>`
  fill: ${(props) => props.theme.colors.grayScale.digitalBlack};
  ${({ disabled }) =>
    disabled
      ? css`
          fill: ${(props) => props.theme.colors.grayScale.digitalBlack300};
        `
      : ''};
  opacity: 0;
`;

const RadioInput = styled.input`
  display: none;
  &:checked + ${RadioSvgButton} > ${RadioDot} {
    opacity: 1;
  }
`;

/**
 * Exported component
 */
export const Radio = ({
  id,
  label,
  value,
  disabled = false,
  required = false,
  size = 'large',
  onChange,
  ...restProps
}: RadioProps) => {
  // Use ID form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  const isChecked = function (checked: boolean) {
    if (checked) {
      return checked;
    }
    return null;
  };

  return (
    <RadioComponentWrapper id={componentId} size={size} data-testid='radio'>
      <FormLabel disabled={disabled} required={required}>
        <RadioInput
          id={`radio-${componentId}`}
          type='radio'
          value={value}
          disabled={disabled}
          onChange={onChange}
          {...isChecked}
          {...restProps}
        />
        <RadioSvgButton
          size={size}
          preserveAspectRatio='xMidYMid meet'
          viewBox='0 0 24 24'
        >
          <RadioCircle
            cx='12'
            cy='12'
            r='10'
            fill='none'
            strokeWidth='2'
            disabled={disabled}
          />
          <RadioDot cx='12' cy='12' r='6' disabled={disabled} />
        </RadioSvgButton>
        {label}
      </FormLabel>
    </RadioComponentWrapper>
  );
};
