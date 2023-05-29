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
} from '../../shared';

/**
 * Various dimensions of button component
 */
const buttonDimensions = {
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
 * Button component properties
 * Extrends html button element attributes
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
 */
export interface ButtonProps extends ButtonInternalProps {
  /**
   * Button label text
   */
  label?: string;

  /**
   * Optional icon before the text
   */
  startIcon?: React.ReactNode;

  /**
   * Optional icon after the text
   */
  endIcon?: React.ReactNode;

  /**
   * Layout variant of the button
   */
  variant?: Variant;
}

interface ButtonInternalProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button size
   */
  size?: Size;

  /**
   * Ref object for the native button element
   */
  ref?: React.RefObject<HTMLButtonElement>;

  /**
   * OnClick event handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Helper function to calculate correct sizes for padding, font size and lineHeight
 * @param props mandatory button props
 * @param borderSize Border width if specified
 * @returns modified css
 */
const calculateSizes = (borderSize?: number) => {
  return css`
    ${variant({
      prop: 'size',
      variants: {
        small: {
          padding: spacing(
            buttonDimensions.small.spacing - convertToSpacingUnit(borderSize)
          ),
          fontSize: buttonDimensions.small.fontSize,
          lineHeight: buttonDimensions.small.lineHeight,
        },
        medium: {
          padding: spacing(
            buttonDimensions.medium.spacing - convertToSpacingUnit(borderSize)
          ),
          fontSize: buttonDimensions.medium.fontSize,
          lineHeight: buttonDimensions.medium.lineHeight,
        },
        large: {
          padding: spacing(
            buttonDimensions.large.spacing - convertToSpacingUnit(borderSize)
          ),
          fontSize: buttonDimensions.large.fontSize,
          lineHeight: buttonDimensions.large.lineHeight,
        },
      },
    })};
  `;
};

/**
 * Internal component styling
 */
const ButtonBase = styled.button`
  font-family: ${typography.font};
  font-weight: ${typography.weight.regular};
  cursor: pointer;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  gap: ${buttonDimensions.contentSpacing};
`;

/**
 * Filled variant
 */
const FilledButton = styled(ButtonBase)<ButtonInternalProps>`
  ${calculateSizes()}
  border: none;
  color: ${(props) => props.theme.colors.neutral};
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack900};

  &:focus-visible,
  &:hover:not(:disabled):not(:active) {
    background-color: ${(props) => props.theme.colors.grayScale.digitalBlack};
  }

  &:active:not(:disabled) {
    background-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack400};
  }

  &:disabled {
    background-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack300};
    color: ${(props) => props.theme.colors.grayScale.digitalBlack200};
    cursor: default;
  }
`;

/**
 * Outlined variant
 */
const OutlinedButton = styled(ButtonBase)<ButtonInternalProps>`
  ${calculateSizes(buttonDimensions.borderWidth)}
  color: ${(props) => props.theme.colors.grayScale.digitalBlack900};
  background-color: ${(props) => props.theme.colors.neutral};
  border: ${pxToRem(buttonDimensions.borderWidth)} solid
    ${(props) => props.theme.colors.grayScale.digitalBlack900};

  &:focus-visible,
  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.grayScale.digitalBlack};
    border-color: ${(props) => props.theme.colors.grayScale.digitalBlack};
    background-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack100};
  }

  &:active:not(:disabled) {
    border-color: ${(props) => props.theme.colors.grayScale.digitalBlack400};
    background-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack100};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
    border-color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Text variant
 */
const TextButton = styled(ButtonBase)<ButtonInternalProps>`
  ${calculateSizes()}
  color: ${(props) => props.theme.colors.grayScale.digitalBlack900};
  background-color: transparent;
  border: none;
  border-bottom: ${pxToRem(buttonDimensions.borderWidth)} solid transparent;
  ${variant({
    prop: 'size',
    /* Override bottom padding */
    variants: {
      small: {
        paddingBottom: spacing(
          buttonDimensions.small.spacing -
            convertToSpacingUnit(buttonDimensions.borderWidth)
        ),
      },
      medium: {
        paddingBottom: spacing(
          buttonDimensions.medium.spacing -
            convertToSpacingUnit(buttonDimensions.borderWidth)
        ),
      },
      large: {
        paddingBottom: spacing(
          buttonDimensions.large.spacing -
            convertToSpacingUnit(buttonDimensions.borderWidth)
        ),
      },
    },
  })};

  &:focus-visible,
  &:hover:not(:disabled):not(:active) {
    color: ${(props) => props.theme.colors.grayScale.digitalBlack};
    border-bottom-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack};
  }

  &:active:not(:disabled) {
    border-bottom-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack400};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Button component
 */
export const Button = ({
  label,
  startIcon,
  endIcon,
  variant = 'filled',
  size = 'medium',
  ...props
}: ButtonProps) => {
  let ButtonComponent;
  switch (variant) {
    case 'filled':
      ButtonComponent = FilledButton;
      break;
    case 'outlined':
      ButtonComponent = OutlinedButton;
      break;
    case 'text':
      ButtonComponent = TextButton;
      break;
  }
  return (
    <ButtonComponent size={size} {...props}>
      {startIcon}
      {label}
      {endIcon}
    </ButtonComponent>
  );
};
