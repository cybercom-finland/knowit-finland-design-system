import React from 'react';
import styled from 'styled-components';
import { variant } from 'styled-system';
import { colors, spacing, typography } from '../shared/styles';

/**
 * Internal component styling
 */
const ButtonComponent = styled.button<Omit<ButtonProps, 'label'>>`
  font-family: ${typography.font};
  font-weight: ${typography.weight};
  border: 0;
  border-radius: ${spacing.borderRadius};
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  ${variant({
    prop: 'size',
    variants: {
      medium: {
        fontSize: typography.size.medium, padding: spacing.padding.medium
      },
      large: {
        fontSize: typography.size.large, padding: spacing.padding.large
      },
      small: {
        fontSize: typography.size.small, padding: spacing.padding.small
      }
    }
  })}
  ${({ backgroundColor }) => variant({
    variants: {
      primary: {
        color: 'white', backgroundColor: backgroundColor || colors.primary.main
      },
      default: {
        color: '#333', backgroundColor: backgroundColor || "transparent", boxShadow: 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'
      }
    }
  })}
`;

/**
 * Internal default properties
 */
ButtonComponent.defaultProps = {
  size: 'medium',
  variant: 'default'
}

/**
 * External properties
 */
interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'primary' | 'default'
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Exported component
 */
export const Button = ({
  label,
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent
      {...props}
    >
      {label}
    </ButtonComponent>
  )
};
