import React, { ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import {
  spacing,
  convertToSpacingUnit,
  pxToRem,
  typography,
  Size,
  Variant,
} from 'shared';
import { MdCheckBox } from 'react-icons/md';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { MdIndeterminateCheckBox } from 'react-icons/md';

/**
 * Various dimensions of checkbox component
 */
const checkboxDimensions = {
  borderWidth: 3,
  contentSpacing: spacing(1),
  small: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(16),
    spacing: 1.5,
  },
  large: {
    fontSize: pxToRem(22),
    lineHeight: pxToRem(25),
    spacing: 2,
  },
};

/**
 * Internal properties for styles
 */
interface InnerProps {
  /**
   * Disable checkbox
   */
  disabled?: boolean;

  /**
   * Checkbox is indeterminate state
   */
  indeterminate?: boolean;

  /**
   * Change event handler passed from internal component
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Checkbox component properties
 * Extrends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
 */
export interface CheckboxProps
  extends InnerProps,
    React.InputHTMLAttributes<HTMLInputElement> {

  /**
   * Checkbox label text
   */
  label?: string;

  /**
   * Checkbox is checked
   */
  checked?: boolean;
}

/**
 * Helper function to calculate correct sizes for padding, font size and lineHeight
 * @param props mandatory checkbox props
 * @param borderSize Border width if specified
 * @returns modified css
 */
const calculateSizes = (props: InnerProps, borderSize?: number) => {
  return css`
    ${variant({
      prop: 'size',
      variants: {
        small: {
          padding: spacing(
            checkboxDimensions.small.spacing - convertToSpacingUnit(borderSize)
          ),
          fontSize: checkboxDimensions.small.fontSize,
          lineHeight: checkboxDimensions.small.lineHeight,
        },
        large: {
          padding: spacing(
            checkboxDimensions.large.spacing - convertToSpacingUnit(borderSize)
          ),
          fontSize: checkboxDimensions.large.fontSize,
          lineHeight: checkboxDimensions.large.lineHeight,
        },
      },
    })};
  `;
};

/**
 * Internal component styling
 */
const CheckboxBase = styled.input<InnerProps>`
  display: none !important;
  font-family: ${typography.font};
  font-weight: ${typography.weight.regular};
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: ${checkboxDimensions.contentSpacing};
`;

CheckboxBase.defaultProps = {
  type: "checkbox"
};

/**
 * Default variant
 */
const CheckboxComponent = styled(CheckboxBase)<InnerProps>`
  ${calculateSizes}
  border: none;
  color: ${(props) => props.theme.colors.neutral};
  background-color: ${(props) => props.theme.colors.digitalBlack900};

  &:focus-visible,
  &:hover:not(:disabled):not(:active) {
    background-color: ${(props) => props.theme.colors.digitalBlack};
  }

  &:active:not(:disabled) {
    background-color: ${(props) => props.theme.colors.digitalBlack400};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.digitalBlack300};
    color: ${(props) => props.theme.colors.digitalBlack200};
    cursor: default;
  }
`;

/**
 * Exported component
 */
export const Checkbox = ({
  label,
  checked,
  indeterminate,
  disabled,
  ...props
}: CheckboxProps) => {

  const [boxChecked, setChecked] = React.useState(true);

  React.useEffect(() => {
    setChecked(!!checked)
  }, [checked])

  const checkboxClicked = () => {
    if(disabled) return;
    setChecked(!boxChecked);
  };

  return (
    <>
      {boxChecked && !indeterminate && <MdCheckBox onClick={checkboxClicked}/>}
      {!boxChecked && !indeterminate && <MdOutlineCheckBoxOutlineBlank onClick={checkboxClicked}/>}
      {indeterminate && <MdIndeterminateCheckBox onClick={checkboxClicked}/>}
      <CheckboxComponent checked={boxChecked} readOnly {...props}/>
      {label}
      
    </>
  );
};
