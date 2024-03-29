import React from 'react';
import { ComponentBaseProps, generateRandomString } from '../../shared';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { Label } from '../Label';
import { HelperText } from '../HelperText';

/**
 * Form group component properties
 * Extends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#additional_attributes
 */
export interface FormGroupProps
  extends ComponentBaseProps<HTMLFieldSetElement>,
    React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
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

  /**
   * Form content
   */
  children?: React.ReactNode;
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
export const FormGroup = React.forwardRef(
  (
    { id, label, helperText, direction, ...restProps }: FormGroupProps,
    ref: FormGroupProps['ref']
  ) => {
    // Use ID form props or create randomized string
    const componentId = id ?? generateRandomString(5);

    return (
      <FormGroupWrapper ref={ref}>
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
  }
);
