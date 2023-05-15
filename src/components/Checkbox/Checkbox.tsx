import React from 'react';
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
  medium: {
    fontSize: pxToRem(18),
    lineHeight: pxToRem(21),
    spacing: 2,
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
}

/**
 * Checkbox component properties
 * Extrends html input element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/checkbox#attributes
 */
export interface CheckboxProps
  extends InnerProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Layout variant of the checkbox
   */
  variant?: Variant;

  /**
   * Checkbox label text
   */
  label: string;

  /**
   * Optional icon before the text
   */
  startIcon?: React.ReactNode;

  /**
   * Optional icon after the text
   */
  endIcon?: React.ReactNode;

  /**
   * OnClick event handler
   */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
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
        medium: {
          padding: spacing(
            checkboxDimensions.medium.spacing - convertToSpacingUnit(borderSize)
          ),
          fontSize: checkboxDimensions.medium.fontSize,
          lineHeight: checkboxDimensions.medium.lineHeight,
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
 * Filled variant
 */
const FilledCheckbox = styled(CheckboxBase)<InnerProps>`
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
 * Outlined variant
 */
const OutlinedCheckbox = styled(CheckboxBase)<InnerProps>`
  ${(props) => calculateSizes(props, checkboxDimensions.borderWidth)}
  color: ${(props) => props.theme.colors.digitalBlack900};
  background-color: ${(props) => props.theme.colors.neutral};
  border: ${pxToRem(checkboxDimensions.borderWidth)} solid
    ${(props) => props.theme.colors.digitalBlack900};

  &:focus-visible,
  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.digitalBlack};
    border-color: ${(props) => props.theme.colors.digitalBlack};
    background-color: ${(props) => props.theme.colors.digitalBlack100};
  }

  &:active:not(:disabled) {
    border-color: ${(props) => props.theme.colors.digitalBlack400};
    background-color: ${(props) => props.theme.colors.digitalBlack100};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.digitalBlack300};
    border-color: ${(props) => props.theme.colors.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Text variant
 */
const TextCheckbox = styled(CheckboxBase)<InnerProps>`
  ${(props) => calculateSizes(props)}
  color: ${(props) => props.theme.colors.digitalBlack900};
  background-color: transparent;
  border: none;
  border-bottom: ${pxToRem(checkboxDimensions.borderWidth)} solid transparent;
  ${variant({
    prop: 'size',
    /* Override bottom padding */
    variants: {
      small: {
        paddingBottom: spacing(
          checkboxDimensions.small.spacing -
            convertToSpacingUnit(checkboxDimensions.borderWidth)
        ),
      },
      medium: {
        paddingBottom: spacing(
          checkboxDimensions.medium.spacing -
            convertToSpacingUnit(checkboxDimensions.borderWidth)
        ),
      },
      large: {
        paddingBottom: spacing(
          checkboxDimensions.large.spacing -
            convertToSpacingUnit(checkboxDimensions.borderWidth)
        ),
      },
    },
  })};

  &:focus-visible,
  &:hover:not(:disabled):not(:active) {
    color: ${(props) => props.theme.colors.digitalBlack};
    border-bottom-color: ${(props) => props.theme.colors.digitalBlack};
  }

  &:active:not(:disabled) {
    border-bottom-color: ${(props) => props.theme.colors.digitalBlack400};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Exported component
 */
export const Checkbox = ({
  label,
  startIcon,
  endIcon,
  variant = 'filled',
  ...props
}: CheckboxProps) => {
  let CheckboxComponent;
  switch (variant) {
    case 'filled':
      CheckboxComponent = FilledCheckbox;
      break;
    case 'outlined':
      CheckboxComponent = OutlinedCheckbox;
      break;
    case 'text':
      CheckboxComponent = TextCheckbox;
      break;
  }
  return (
    <>
      <CheckboxComponent {...props}/>
      {label}
    </>
  );
};
