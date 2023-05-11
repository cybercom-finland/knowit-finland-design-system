import React from 'react';
import { Size, pxToRem } from 'shared';
import styled from 'styled-components';
import { variant } from 'styled-system';

/**
 * Various dimensions of icon button component
 */
const iconButtonDimension = {
  borderRadius: pxToRem(4),
  medium: {
    fontSize: pxToRem(16),
  },
  large: {
    fontSize: pxToRem(24),
  },
};

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
  border-radius: ${iconButtonDimension.borderRadius};

  ${variant({
    prop: 'size',
    variants: {
      medium: {
        fontSize: iconButtonDimension.medium.fontSize,
      },
      large: {
        fontSize: iconButtonDimension.large.fontSize,
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
export const IconButton = ({
  children,
  size = 'medium',
  disabled = false,
  ...restProps
}: IconButtonProps) => {
  const props = { size, disabled, ...restProps };

  return <IconButtonWrapper {...props}>{children}</IconButtonWrapper>;
};
