import React from 'react';
import {
  generateRandomString,
  InputComponentBaseProps,
  pxToRem,
  typography,
} from '../../shared';
import { InputBaseProps } from '../Input';
import styled, { css } from 'styled-components';
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
>;
/**
 * Search component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#additional_attributes
 */
export interface RadioGroupProps
  extends InputComponentBaseProps<HTMLInputElement>,
    RadioInputBaseProps,
    RadioInputHTMLAttributes {
  /**
   * Radio Group label
   */
  label?: string;
  /**
   * Radio Group help text
   */
  helperText?: string;
  /**
   * Radio Group direction
   */
  direction?: 'horizontal' | 'vertical';
}

const changeDirection = () => {
  return css`
    ${variant({
      prop: 'direction',
      variants: {
        horizontal: {
          flexDirection: 'row',
        },
        vertical: {
          flexDirection: 'column',
        },
      },
    })};
  `;
};

const RadioGroupWrapper = styled.div<RadioGroupProps>`
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  border: none;
`;
const RadioGroupLabel = styled.span`
  font-size: ${pxToRem(18)};
  font-weight: ${typography.weight.bold};
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  padding-bottom: ${pxToRem(8)};
`;
const RadioGroupHelpText = styled.span`
  font-size: ${pxToRem(18)};
  color: ${(props) => props.theme.colors.grayScale.digitalBlack};
`;
const RadioGroupComponent = styled.div<RadioGroupProps>`
  display: inline-flex;
  ${changeDirection};
  box-sizing: border-box;
  align-items: center;
  border: none;
`;
/**
 * Exported component
 */
export const RadioGroup = ({
  id,
  label,
  helperText,
  direction,
  ...restProps
}: RadioGroupProps) => {
  // Use ID form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <RadioGroupWrapper>
      <RadioGroupLabel>{label}</RadioGroupLabel>
      <RadioGroupHelpText>{helperText}</RadioGroupHelpText>
      <RadioGroupComponent
        direction={direction}
        id={componentId}
        data-testid={'radioGroup'}
        {...restProps}
      />
    </RadioGroupWrapper>
  );
};
