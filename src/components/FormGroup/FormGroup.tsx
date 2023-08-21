import React from 'react';
import { generateRandomString } from '../../shared';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Label } from '../Label';
import { HelperText } from '../HelperText';

/**
 * Search component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#additional_attributes
 */
export interface FormGroupProps {
  /**
   * Form Group label
   */
  label?: string;

  /**
   * Id
   */
  id?: string;

  /**
   * Form Group helper text
   */
  helperText?: string;

  /**
   * Form Group direction
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

const FormGroupWrapper = styled.fieldset<FormGroupProps>`
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  border: none;
`;

const FieldGroupComponent = styled.div<FormGroupProps>`
  display: inline-flex;
  ${changeDirection};
  border: none;
  gap: 8px;
`;

/**
 * Form group component
 */
export const FormGroup = ({
  id,
  label,
  helperText,
  direction,
  ...restProps
}: FormGroupProps) => {
  // Use ID form props or create randomized string
  const componentId = id ?? generateRandomString(5);

  return (
    <FormGroupWrapper>
      <Label>{label}</Label>
      <HelperText>{helperText}</HelperText>
      <FieldGroupComponent
        direction={direction}
        id={componentId}
        data-testid='formGroup'
        {...restProps}
      />
    </FormGroupWrapper>
  );
};
