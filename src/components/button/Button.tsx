import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { colors, spacing, typography } from '../../shared';

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
  size?: 'small' | 'medium' | 'large';
}

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
  ${variant({
    prop: 'size',
    variants: {
      medium: {
        padding: spacing(2),
        fontSize: typography.size.paragraph2,
        lineHeight: typography.lineHeight.paragraph2,
      },
      large: {
        padding: spacing(2),
        fontSize: typography.size.paragraph,
        lineHeight: typography.lineHeight.paragraph,
      },
      small: {
        padding: spacing(1.5),
        fontSize: typography.size.caption,
        lineHeight: typography.lineHeight.caption,
      },
    },
  })};
`;
ButtonBase.defaultProps = {
  size: 'medium',
};

/**
 * Filled variant
 */
const FilledButton = styled(ButtonBase)<InnerProps>`
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
  color: ${colors.base.digitalBlack900};
  background-color: ${colors.base.neutral};
  border: 2px solid ${colors.base.digitalBlack900};
  &:focus-visible,
  &:hover:not(:disabled) {
    border-width: 3px;
    margin: -1px;
  }
  &:active:not(:disabled) {
    border-color: ${colors.base.digitalBlack400};
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
  color: ${colors.base.digitalBlack900};
  background-color: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  &:focus-visible,
  &:hover:not(:disabled):not(:active) {
    border-color: ${colors.base.digitalBlack900};
  }
  &:active:not(:disabled) {
    border-color: ${colors.base.digitalBlack400};
  }
  &:disabled {
    color: ${colors.base.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Button properties
 */
interface Props extends InnerProps {
  /**
   * Layout variant of the button
   */
  variant?: 'filled' | 'outlined' | 'text';
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
