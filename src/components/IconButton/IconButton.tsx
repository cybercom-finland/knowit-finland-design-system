import React from 'react';
import { ComponentBaseProps, Size, pxToRem } from '../../shared';
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
  extends ComponentBaseProps<HTMLButtonElement>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
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

  color: ${(props) => props.theme.colors.grayScale.digitalBlack900};
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
    color: ${(props) => props.theme.colors.grayScale.digitalBlack};
    background-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack200};
  }

  &:active:not(:disabled) {
    color: ${(props) => props.theme.colors.grayScale.digitalBlack400};
    background-color: ${(props) =>
      props.theme.colors.grayScale.digitalBlack100};
  }

  &:disabled {
    color: ${(props) => props.theme.colors.grayScale.digitalBlack300};
    cursor: default;
  }
`;

/**
 * Icon button component
 */
export const IconButton = React.forwardRef(
  (
    {
      children,
      size = 'medium',
      disabled = false,
      ...restProps
    }: IconButtonProps,
    ref: IconButtonProps['ref']
  ) => {
    const props = { size, disabled, ...restProps };

    return (
      <IconButtonWrapper ref={ref} {...props}>
        {children}
      </IconButtonWrapper>
    );
  }
);
