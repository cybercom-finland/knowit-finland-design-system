import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { colors, spacing, typography } from '../../shared';

/**
 * Internal properties for styles
 */
interface InnerProps {
  /**
   * Is button action prevented?
   */
  disabled?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Margin as defined spacing
   */
  margin?: number | number[];
}

/**
 * Internal component styling
 */
const ButtonBase = styled.button<InnerProps>`
  font-family: ${typography.font};
  font-weight: ${typography.weight.regular};
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  margin: ${({ margin }) => spacing(margin)};
  ${variant({
    prop: 'size',
    variants: {
      medium: {
        padding: spacing(2),
        fontSize: typography.size.paragraph2,
        lineHeight: typography.lineHeight.paragraph2
      },
      large: {
        padding: spacing(2),
        fontSize: typography.size.paragraph,
        lineHeight: typography.lineHeight.paragraph
      },
      small: {
        padding: spacing(1.5),
        fontSize: typography.size.caption,
        lineHeight: typography.lineHeight.caption
      }
    }
  })}
`;
ButtonBase.defaultProps = {
  size: 'medium',
};

const FilledButton = styled(ButtonBase)<InnerProps>`
  border: none;
  color: ${colors.base.white};
  background-color: ${colors.base.digitalBlack900};
  &:hover, &:focus {
    background-color: ${colors.base.digitalBlack};
  }
  &:disabled {
    background-color: ${colors.base.digitalBlack300};
    color: ${colors.base.digitalBlack200};
  }
`;

const OutlinedButton = styled(ButtonBase)<InnerProps>`
  color: ${colors.base.digitalBlack900};
  background-color: ${colors.base.white};;
  border: 2px solid ${colors.base.digitalBlack900};
  &:hover, &:focus {
    border-width: 3px;
  }
  &:disabled {
    color: ${colors.base.digitalBlack300};
    border: 2px solid ${colors.base.digitalBlack300};
  }
`;

const TextButton = styled(ButtonBase)<InnerProps>`
  border: none;
  color: ${colors.base.digitalBlack900};
  background-color: transparent;
  &:hover, &:focus, &:active {
    border-bottom: 2px solid ${colors.base.digitalBlack};
    color: ${colors.base.digitalBlack};
  }
  &:disabled {
    color: ${colors.base.digitalBlack300};
  }
`;

/**
 * External properties
 */
interface Props extends InnerProps {
  /**
   * Layout variant of the button
   */
  variant?: 'filled' | 'outlined' | 'text'
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
   * Event handlers passed from internal component
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
  )
};
