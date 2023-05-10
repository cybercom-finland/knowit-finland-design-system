import React from 'react';
import { Size, pxToRem } from 'shared';
import styled from 'styled-components';
import { variant } from 'styled-system';

type ButtonSize = Exclude<Size, 'small'>;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Icon content as chilren prop
   */
  children: React.ReactNode;

  /**
   * Button size
   */
  size?: ButtonSize;

  /**
   * Is button disabled
   */
  disabled?: boolean;

  /**
   * OnClick event handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Wrapper component
 */
const IconButtonWrapper = styled.button<IconButtonProps>`
  cursor: pointer;
  display: inline-flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  padding: 0;

  color: ${(props) => props.theme.colors.digitalBlack900};
  background-color: transparent;
  border: none;
  border-radius: ${pxToRem(4)};

  ${variant({
    prop: 'size',
    variants: {
      medium: {
        fontSize: pxToRem(16),
      },
      large: {
        fontSize: pxToRem(24),
      },
    },
  })}

  &:focus-visible,
  &:hover:not(:disabled) {
    color: ${(props) => props.theme.colors.digitalBlack};
    background-color: ${(props) => props.theme.colors.digitalBlack200};
  }

  &:active:not(:disabled) {
    color: ${(props) => props.theme.colors.digitalBlack400};
    background-color: ${(props) => props.theme.colors.digitalBlack100};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Icon button component
 */
export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <IconButtonWrapper {...props}>{children}</IconButtonWrapper>;
};

/**
 * Icon button default props
 */
IconButton.defaultProps = {
  size: 'medium',
  disabled: false,
};
