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
import { Wrapper } from 'components/Wrapper';

/**
 * Various dimensions of checkbox component
 */
const checkboxDimensions = {
  contentSpacing: spacing(1),
  small: {
    fontSize: pxToRem(16),
  },
  large: {
    fontSize: pxToRem(24),
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
 * Helper function to calculate correct sizes for font size
 * @param props mandatory checkbox props
 * @param borderSize Border width if specified
 * @returns modified css
 */
const calculateSizes = (props: InnerProps) => {
  return css`
    ${variant({
      prop: 'size',
      variants: {
        small: {
          fontSize: checkboxDimensions.small.fontSize,
        },
        large: {
          fontSize: checkboxDimensions.large.fontSize,
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
  checked = false,
  indeterminate = false,
  disabled = false,
  ...restProps
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
    <Wrapper onClick={checkboxClicked}>
      {boxChecked && !indeterminate && <MdCheckBox/>}
      {!boxChecked && !indeterminate && <MdOutlineCheckBoxOutlineBlank/>}
      {indeterminate && <MdIndeterminateCheckBox />}
      <CheckboxComponent checked={boxChecked} readOnly {...restProps}/>
      {label}
    </Wrapper>
  );
};
