import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import {
  colors,
  spacing,
  convertToSpacingUnit,
  pxToRem,
  typography,
  Size,
  Variant,
} from 'shared';

/**
 * Various dimensions of button component
 */
const buttonDimensions = {
  borderWidth: 3,
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
   * Disable button
   */
  disabled?: boolean;
  /**
   * Button size
   */
  size?: Size;
}

/**
 * Button properties
 */
interface Props extends InnerProps {
  /**
   * Layout variant of the button
   */
  variant?: Variant;
  /**
   * Button label text
   */
  text: string;
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
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Helper function to calculate correct sizes for padding, font size and lineHeight
 * @param props mandatory button props
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
const ButtonBase = styled.button<InnerProps>`
  font-family: ${typography.font};
  font-weight: ${typography.weight.regular};
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  line-height: 1;
`;
ButtonBase.defaultProps = {
  size: 'medium',
};

/**
 * Filled variant
 */
const FilledButton = styled(ButtonBase)<InnerProps>`
  ${calculateSizes}
  border: none;
  color: ${colors.base.neutral};
  background-color: ${colors.base.digitalBlack900};

  &:focus-visible,
  &:hover:not(:disabled):not(:active) {
    background-color: ${colors.base.digitalBlack};
  }

  &:active:not(:disabled) {
    background-color: ${colors.base.digitalBlack400};
  }

  &:disabled {
    background-color: ${colors.base.digitalBlack300};
    color: ${colors.base.digitalBlack200};
    cursor: default;
  }
`;

/**
 * Outlined variant
 */
const OutlinedButton = styled(ButtonBase)<InnerProps>`
  ${(props) => calculateSizes(props, buttonDimensions.borderWidth)}
  color: ${colors.base.digitalBlack900};
  background-color: ${colors.base.neutral};
  border: ${pxToRem(buttonDimensions.borderWidth)} solid
    ${colors.base.digitalBlack900};

  &:focus-visible,
  &:hover:not(:disabled) {
    color: ${colors.base.digitalBlack};
    border-color: ${colors.base.digitalBlack};
    background-color: ${colors.base.digitalBlack100};
  }

  &:active:not(:disabled) {
    border-color: ${colors.base.digitalBlack400};
    background-color: ${colors.base.digitalBlack100};
  }

  &:disabled {
    color: ${colors.base.digitalBlack300};
    border-color: ${colors.base.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Text variant
 */
const TextButton = styled(ButtonBase)<InnerProps>`
  ${(props) => calculateSizes(props)}
  color: ${colors.base.digitalBlack900};
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
    color: ${colors.base.digitalBlack};
    border-bottom-color: ${colors.base.digitalBlack};
  }

  &:active:not(:disabled) {
    border-bottom-color: ${colors.base.digitalBlack400};
  }

  &:disabled {
    color: ${colors.base.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Exported component
 */
export const Button = ({
  text: label,
  startIcon,
  endIcon,
  variant = 'filled',
  ...props
}: Props) => {
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
    <ButtonComponent {...props}>
      {startIcon}
      {label}
      {endIcon}
    </ButtonComponent>
  );
};
