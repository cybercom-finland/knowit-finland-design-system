import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { pxToRem, ComponentBaseProps } from '../../shared';

export type BoxVariant = 'regular' | 'rounded';

/**
 * Dimensions of box component
 */
const boxDimensions = {
  rounded: {
    borderRadius: `0 ${pxToRem(32)} 0 ${pxToRem(32)}`,
  },
};

/**
 * Box component properties
 * Extends html div element attributes
 */
export interface BoxProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Box variant
   */
  variant?: BoxVariant;

  /**
   * Children
   */
  children: React.ReactNode;
}

/**
 * Helper function to calculate correct sizes
 * @param props mandatory checkbox props
 * @returns modified css
 */
const calculateSizes = () => {
  return css`
    ${variant({
      prop: 'variant',
      variants: {
        rounded: {
          borderRadius: boxDimensions.rounded.borderRadius,
          overflow: 'hidden',
          width: 'min-content',
        },
      },
    })};
  `;
};

const InternalBox = styled.div<BoxProps>`
  ${calculateSizes}
`;

/**
 * Checkbox component
 */
export const Box = ({
  id,
  variant = 'regular',
  children,
  ...restProps
}: BoxProps) => {
  return (
    <InternalBox variant={variant} {...restProps}>
      {children}
    </InternalBox>
  );
};
