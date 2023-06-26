import React from 'react';
import { generateRandomString } from '../../shared';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { RadioProps } from '../Radio';

/**
 * Search component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#additional_attributes
 */
export interface RadioGroupProps extends RadioProps {
  /**
   * Radio Group label
   */
  label?: string;
  /**
   * Radio Group helper text
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
      <Label>{label}</Label>
      <HelperText>{helperText}</HelperText>
      <RadioGroupComponent
        direction={direction}
        id={componentId}
        data-testid='radioGroup'
        {...restProps}
      />
    </RadioGroupWrapper>
  );
};
