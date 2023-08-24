import React from 'react';
import styled, { css } from 'styled-components';
import { variant } from 'styled-system';
import { pxToRem, ComponentBaseProps } from '../../shared';

export type PopupVariant = 'rectangle' | 'rounded';

/**
 * Dimensions of Popup component
 */
const popupDimensions = {
  rounded: {
    borderRadius: pxToRem(32),
  },
};

/**
 * Popup component properties
 * Extends html div element attributes
 */
export interface PopupProps extends ComponentBaseProps<HTMLDivElement> {
  /**
   * Popup variant
   */
  variant?: PopupVariant;

  /**
   * Children
   */
  children: React.ReactNode;
}

/**
 * Helper function to calculate correct sizes
 * @param props mandatory popup props
 * @returns modified css
 */
const calculateSizes = () => {
  return css`
    ${variant({
      prop: 'variant',
      variants: {
        rounded: {
          overflow: 'hidden',
          borderRadius: `0 ${popupDimensions.rounded.borderRadius} 0 ${popupDimensions.rounded.borderRadius}`,
        },
      },
    })};
  `;
};

const InternalPopup = styled.div<PopupProps>`
  ${calculateSizes}
  width: min-content;
  background-color: ${(props) => props.theme.colors.grayScale.digitalBlack100};
`;

/**
 * Popup component
 */
export const Popup = ({
  variant = 'rectangle',
  children,
  ...restProps
}: PopupProps) => {
  return (
    <InternalPopup variant={variant} {...restProps}>
      {children}
    </InternalPopup>
  );
};
